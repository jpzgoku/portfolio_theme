<template lang="html">

	<div class="table-container">
		<div class="table-positioning">

			<table>
				<tr v-for="row in boardSize.rows">
					<td
						v-for="column in boardSize.columns"
						:style="{'background-color': characterColor}"
						:data="row + '-' + column"
						:ref="row + '-' + column"
						@click="fireAt($event)">
					</td>
				</tr>
			</table>

		</div>
	</div>

</template>

<script>

import Util from '../js/util';

export default {
	name: 'dbz-character-grid',

	props: {

		characterColor: {
			type: String
		},

		isOpponentTurn: {
			type: Boolean
		},

		gameInProgress: {
			type: Boolean
		},

		gameFinished: {
			type: Boolean
		}

	},

	data() {
		return {
			boardDisabled: false,
			boardSize: {
				rows: 10,
				columns: 10
			},
			ships: [
				{ locations: [0, 0], hits: ["", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0, 0], hits: ["", "", "", ""], sunk: false },
				{ locations: [0, 0, 0, 0, 0], hits: ["", "", "", "", ""], sunk: false }
			],
			previousComputerGuesses: []
		}
	},

	mounted() {
		this.generateShips();
	},

	methods: {

		emptyBoard() {

			Util.clearBoard('miss', 'hit');

			this.ships = [
				{ locations: [0, 0], hits: ["", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0, 0], hits: ["", "", "", ""], sunk: false },
				{ locations: [0, 0, 0, 0, 0], hits: ["", "", "", "", ""], sunk: false }
			];

			this.generateShips();
		},

		generateShips() {
			this.ships.map(ship => {
				ship.locations = this.generateLocations(ship);
			});
		},

		generateLocations(ship) {
			var binary = Math.floor(Math.random() * Math.floor(2));
			var rowNum = Math.floor(Math.random() * (this.boardSize.rows)) + 1;
			var columnNum = Math.floor(Math.random() * (this.boardSize.columns)) + 1;
			var cellLocation = function() {
				return `${rowNum}-${columnNum}`;
			};

			var newLoations = [];
			newLoations.push(cellLocation());

			for (var i = 1; i < ship.locations.length; i++) {
				(binary) ? rowNum++ : columnNum++;

				if (rowNum > this.boardSize.rows || columnNum > this.boardSize.columns) {
					return this.generateLocations(ship);
				}

				newLoations.push(cellLocation());
			}

			if (this.checkCollision(newLoations)) {
				return newLoations;
			}
			return this.generateLocations(ship);
		},

		checkCollision(newLoations) {

			var oldLocations = [];
			this.ships.map(ship => {
				oldLocations = oldLocations.concat(ship.locations);
			});

			var duplicateLocations = oldLocations.filter(location => {
				return newLoations.includes(location);
			});

			return Boolean(!duplicateLocations.length);
		},

		fireAt(e) {

			if (this.gameFinished || !this.isOpponentTurn || this.boardDisabled) {
				return false;
			}

			if (!this.gameInProgress) {
				this.$emit('startGame');
			}

			var cellPath = e.path[0];
			var cellDataNum = e.srcElement.attributes.data.nodeValue;

			this.previousComputerGuesses.push(cellDataNum);

			for (var ship in this.ships) {
				var currentShip = this.ships[ship];

				for (var location in currentShip.locations) {
					var currentLocation = currentShip.locations[location];
					if (cellDataNum === currentLocation) {

						cellPath.classList.add('hit');
						var hitIndex = currentShip.locations.indexOf(currentLocation);
						currentShip.hits[hitIndex] = cellDataNum;

						return this.isShipSunk(currentShip);
					}
				}
			}
			this.$emit('endOpponentTurn', 'You missed.');
			cellPath.classList.add('miss');
		},

		isShipSunk(currentShip) {
			var hits = currentShip.hits.filter(section => section);

			if (hits.length !== currentShip.locations.length) {
				this.$emit('endOpponentTurn', 'Hit!');
				return
			}
			currentShip.sunk = true;
			this.$emit('endOpponentTurn', 'Combo Completed!');
			this.areAllShipsSunk();
		},

		areAllShipsSunk() {
			var shipsStillAfloat = this.ships.filter(ship => !ship.sunk);
			if (shipsStillAfloat.length) return false;
			this.$emit('endGame');
		},

		computerGuess() {
			// If the computer previously got a hit, but has yet to sink the ship, pick an adjacent square to that hit.
			// Otherwise, random guess it is.

			// Look in the ships object. If any of the ships have been hit but are not sunk then pick adjacent squares and guess those one by one. If those squares are off the board or have already been guesses then ingore that 'guess' and move to the next adjacent square that is on the board and has yet to be attacked.

			this.boardDisabled = true;
			var afloatShips = this.ships.filter(ship => !ship.sunk);
			var shipsThatHaveBeenHit = afloatShips.filter(ship => Boolean(ship.hits.length));
			for (var ship in shipsThatHaveBeenHit) {
				var currentShipHits = shipsThatHaveBeenHit[ship].hits;
				for (var hit in currentShipHits) {
					var nums = currentShipHits[hit].split('-');
					var row = parseInt(nums[0]);
					var column = parseInt(nums[1]);

					var nextGuess = this.guessAdjacentSquares(row, column);

					if (nextGuess.length) {
						//Take the first guess and call the Fire function
						var td = nextGuess[0];
						setTimeout(() => {
							this.boardDisabled = false;
							this.$refs[td][0].click();
						}, 500);
						return
					}
				}
			}
			var guess = this.randomGuess();
		},

		randomGuess() {
			var rowNum = Math.floor(Math.random() * (this.boardSize.rows)) + 1;
			var columnNum = Math.floor(Math.random() * (this.boardSize.columns)) + 1;
			var guess = `${rowNum}-${columnNum}`;

			if (this.previousComputerGuesses.indexOf(guess) < 0) {
				setTimeout(() => {
					this.boardDisabled = false;
					this.$refs[guess][0].click();
				}, 500);
				return
			}
			this.randomGuess();
		},

		guessAdjacentSquares(row, column) {
			var adjacentSquares = [
				`${row - 1}-${column}`,
				`${row}-${column - 1}`,
				`${row + 1}-${column}`,
				`${row}-${column + 1}`
			];

			var validGuesses = adjacentSquares.filter(square => {
				var nums = square.split('-');
				var row = parseInt(nums[0]);
				var column = parseInt(nums[1]);
				return Boolean(
					row > 0 &&
					row <= this.boardSize.rows &&
					column > 0 &&
					column <= this.boardSize.columns
				);
			});

			var notYetGuessed = validGuesses.filter(guess => {
				return this.previousComputerGuesses.indexOf(guess) < 0;
			});

			return notYetGuessed;
		}

	}

}
</script>

<style lang="scss" scoped>

	.table-container {
		margin: 0 0 100px 0;
		padding-top: 100%; /* 1:1 Aspect Ratio */
		position: relative; /* If you want text inside of it */
		width: 100%;
	}

	$mediumBrk: 768px;

	@media only screen and (max-width: $mediumBrk) {

		.table-container {
			margin: 0;
		}

	}

	.table-positioning {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}

	table {
		height: 100%;
		max-width: 100%;
		width: 100%;

		td {
			border: 1px solid black;
			width: auto;

			&:hover {
				opacity: 0.8;
			}
		}
	}

</style>
