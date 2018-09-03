<template lang="html">

	<b-row class="m-0">

		<b-col md="6" class="p-0">
			<div class="table-container">
				<div class="table-positioning">

					<table :class="heroCharacter">
						<tr v-for="row in boardSize.rows">
							<td
								v-for="column in boardSize.columns"
								:data="row + '-' + column"
								@click="fireAt($event, 'hero')">
							</td>
						</tr>
					</table>

				</div>
			</div>
		</b-col>

		<b-col md="6" class="p-0">
			<div class="table-container">
				<div class="table-positioning">

					<table :class="villianCharacter">
						<tr v-for="row in boardSize.rows">
							<td
								v-for="column in boardSize.columns"
								:data="row + '-' + column"
								@click="fireAt($event, 'villian')">
							</td>
						</tr>
					</table>

				</div>
			</div>
		</b-col>

	</b-row>

</template>

<script>

export default {
	name: 'dbz-game-board',

	props: {

		heroCharacter: {
			type: String
		},

		villianCharacter: {
			type: String
		}

	},

	data() {
		return {
			boardSize: {
				rows: 8,
				columns: 8
			},
			heroNumShips: 3,
			villianNumShips: 3,
			shipLength: 3,
			heroShips: [
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false }
			],
			villianShips: [
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
				{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false }
			],
		}
	},

	mounted() {
		this.generateShips(this.heroShips);
		this.generateShips(this.villianShips);
	},

	methods: {

		generateShips(ships) {
			for (var ship in ships) {
				ships[ship].locations = this.generateLocations(ships);
				// console.log(ships[ship].locations);
			}
		},

		generateLocations(ships) {
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
					return this.generateLocations(ships);
				}

				locationsArr.push(cellLocation());
			}

			if (this.checkCollision(locationsArr, ships)) {
				return locationsArr;
			}
			return this.generateLocations(ships);
		},

		checkCollision(locationsArr, ships) {
			var oldLocations = [];
			for (var ship in ships) {
				oldLocations = oldLocations.concat(ships[ship].locations);
			}

			for (var location in oldLocations) {
				if (locationsArr.includes(oldLocations[location])) {
					return false;
				}
			}
			return true;
		},

		fireAt(e, target) {

			if (target === 'hero') {
				target = this.heroShips;
			} else if (target === 'villian') {
				target = this.villianShips;
			}

			var cellPath = e.path[0];
			var cellDataNum = e.srcElement.attributes.data.nodeValue;

			for (var ship in target) {
				var currentShip = target[ship];
				for (var location in currentShip.locations) {
					var currentLocation = currentShip.locations[location];
					if (cellDataNum === currentLocation) {

						cellPath.classList.add('hit');
						var hitIndex = currentShip.locations.indexOf(currentLocation);
						currentShip.hits[hitIndex] = 'Hit!';

						return this.isShipSunk(currentShip, target);
					}
				}
			}
			cellPath.classList.add('miss');
		},

		isShipSunk(currentShip, target) {
			// target is either this.heroShips or this.villianShips

			for (var section in currentShip.hits) {
				if (!currentShip.hits[section]) {
					return false;
				}
			}
			currentShip.sunk = true;
			this.areAllShipsSunk(target);
		},

		areAllShipsSunk(target) {
			// target is either this.heroShips or this.villianShips

			for (var ship in target) {
				if (!target[ship].sunk) {
					return false;
				}
			}
			console.log('You lose bitch!');
			return true;
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
	}

	td {
		border: 1px solid black;
		width: auto;
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
