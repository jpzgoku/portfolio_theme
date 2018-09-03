<template lang="html">

	<div class="table-container">
		<div class="table-positioning">

			<table :class="[character, {'gameInProgress': gameInProgress}]">
				<tr v-for="row in boardSize.rows">
					<td
						v-for="column in boardSize.columns"
						:data="row + '-' + column"
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

		character: {
			type: String
		},

		gameInProgress: {
			type: Boolean
		}

	},

	data() {
		return {
			boardSize: {
				rows: 8,
				columns: 8
			},
			numShips: 3,
			shipLength: 3,
			ships: [
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false }
			]
		}
	},

	mounted() {
		this.generateShips();
	},

	methods: {

		generateShips() {
			for (var ship in this.ships) {
				this.ships[ship].locations = this.generateLocations();
				console.log(this.ships[ship].locations);
			}
		},

		generateLocations() {
			var binary = Math.floor(Math.random() * Math.floor(2));
			var rowNum = Math.floor(Math.random() * (this.boardSize.rows)) + 1;
			var columnNum = Math.floor(Math.random() * (this.boardSize.columns)) + 1;
			var cellLocation = function() {
				return parseInt(rowNum) + '-' + parseInt(columnNum);
			};

			var locationsArr = [];
			locationsArr.push(cellLocation());

			for (var i = 1; i < this.shipLength; i++) {
				(binary) ? rowNum++ : columnNum++;

				if (rowNum > this.boardSize.rows || columnNum > this.boardSize.columns) {
					return this.generateLocations();
				}

				locationsArr.push(cellLocation());
			}

			if (this.checkCollision(locationsArr)) {
				return locationsArr;
			}
			return this.generateLocations();
		},

		checkCollision(locationsArr) {
			var oldLocations = [];
			for (var ship in this.ships) {
				oldLocations = oldLocations.concat(this.ships[ship].locations);
			}

			for (var location in oldLocations) {
				if (locationsArr.includes(oldLocations[location])) {
					return false;
				}
			}
			return true;
		},

		fireAt(e) {

			if (!this.gameInProgress) {
				return false;
			}

			var cellPath = e.path[0];
			var cellDataNum = e.srcElement.attributes.data.nodeValue;

			for (var ship in this.ships) {
				var currentShip = this.ships[ship];
				for (var location in currentShip.locations) {
					var currentLocation = currentShip.locations[location];
					if (cellDataNum === currentLocation) {

						cellPath.classList.add('hit');
						var hitIndex = currentShip.locations.indexOf(currentLocation);
						currentShip.hits[hitIndex] = 'Hit!';

						return this.isShipSunk(currentShip);
					}
				}
			}
			cellPath.classList.add('miss');
		},

		isShipSunk(currentShip) {

			for (var section in currentShip.hits) {
				if (!currentShip.hits[section]) {
					return false;
				}
			}
			currentShip.sunk = true;
			this.areAllShipsSunk();
		},

		areAllShipsSunk() {
			for (var ship in this.ships) {
				if (!this.ships[ship].sunk) {
					return false;
				}
			}
			console.log('You lose bitch!');
			this.endGame();
		},

		endGame() {
			this.$emit('endGame');
		},

		emptyBoard() {
			this.ships = [
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false }
			]
		}

	}

}
</script>

<style lang="scss" scoped>

	table {
		background-image: none;
		height: 100%;
		max-width: 100%;
		width: 100%;

		&.gameInProgress:hover {
			cursor: pointer;
		}

		td {
			border: 1px solid black;
			width: auto;
		}
	}

	.table-container {
		padding-top: 100%; /* 1:1 Aspect Ratio */
		position: relative; /* If you want text inside of it */
		width: 100%;
	}

	.table-positioning {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}

	.hidden {
		display: none;
	}

	.shade {
		background-color: black;
	}

</style>
