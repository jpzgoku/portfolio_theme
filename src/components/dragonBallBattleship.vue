<template lang="html">

	<div>
		<b-container>

			<b-row class="text-center m-4">

				<b-col>
					<!-- <b-btn v-b-modal.heroSelectModal variant="primary" @click="heroSelectModalOpen = true"> -->
					<b-btn v-b-modal.heroSelectModal variant="primary">
						Heros
					</b-btn>

					<b-btn>{{ mainButtonText }}</b-btn>
					<b-btn v-b-modal.settings>Settings</b-btn>

					<!-- <b-btn v-b-modal.villianSelectModal variant="primary" @click="villianSelectModalOpen = true"> -->
					<b-btn v-b-modal.villianSelectModal variant="primary">
						Villians
					</b-btn>
				</b-col>

			</b-row>

		</b-container>

		<div>
			<b-modal id="settings" title="Settings" ok-only>

				<b-row class="text-center">
					<b-col>

						<h4 class="m-4">Heros</h4>

						<b-btn-group class="m-2">
							<b-button
								variant="outline-secondary"
								:pressed="heroHumanPlayer"
								@click="selectPlayerType('hero', true)">
									Player
							</b-button>

							</br>

							<b-button
								variant="outline-secondary"
								:pressed="!heroHumanPlayer"
								@click="selectPlayerType('hero', false)">
									CPU
							</b-button>
						</b-btn-group>

					</b-col>

					<b-col>

						<h4 class="m-4">Villians</h4>

						<b-btn-group class="m-2">
							<b-button
								variant="outline-secondary"
								:pressed="villianHumanPlayer"
								@click="selectPlayerType('villian', true)">
									Player
							</b-button>

							</br>

							<b-button
								variant="outline-secondary"
								:pressed="!villianHumanPlayer"
								@click="selectPlayerType('villian', false)">
									CPU
							</b-button>

						</b-btn-group>

					</b-col>
				</b-row>

				<b-row>
					<b-col>

						<h4>Board Size</h4>
						<input type="text" @keyup.enter="inputBoardSize">

					</b-col>
				</b-row>

			</b-modal>
		</div>

		<character-select-modals
			@selectHero="selectHero($event)"
			@selectVillian="selectVillian($event)">
		</character-select-modals>

		<!-- Use this one if I decide to close the character select modal after choosing a character -->
		<!-- <character-select-modals
			:hero-select-modal="heroSelectModalOpen"
			:villian-select-modal="villianSelectModalOpen"
			@selectHero="selectHero($event)"
			@selectVillian="selectVillian($event)">
		</character-select-modals> -->

		<b-row class="m-0">
			<b-col lg="2" class="p-0">
				<div id="imgPlayer1" :class="heroCharacter"></div>
			</b-col>

			<b-col lg="4" class="p-0">
				<div class="ass">
					<div class="poo">

						<table>
							<tr v-for="row in boardSize.rows">
								<td
									v-for="column in boardSize.columns"
									:class="heroCharacter"
									:data="row + '-' + column"
									@click="test"></td>
							</tr>
						</table>

					</div>
				</div>
			</b-col>

			<b-col lg="4" class="p-0">
				<div class="ass">
					<div class="poo">

						<table>
							<tr v-for="row in boardSize.rows">
								<td
									v-for="column in boardSize.columns"
									:class="villianCharacter"
									:data="row + '-' + column"
									@click="test">
								</td>
							</tr>
						</table>

					</div>
				</div>
			</b-col>

			<b-col lg="2" class="p-0">
				<div id="imgPlayer2" :class="villianCharacter"></div>
			</b-col>
		</b-row>

	</div>

</template>

<script>

import CharacterSelectModals from './characterSelectModals.vue';

export default {
	name: 'dragon-ball-battleship',
	components: {
		CharacterSelectModals
	},

	props: {

		siteUrl: {
			type: String
		}
	},

	data() {
		return {
			gameInProgress: false,
			heroHumanPlayer: true,
			villianHumanPlayer: false,
			heroSelect: false,
			villianSelect: false,
			heroCharacter: 'beerus',
			villianCharacter: '',
			// heroSelectModalOpen: false,
			// villianSelectModalOpen: false
			boardSize: {
				rows: 8,
				columns: 8
			}
		}
	},

	computed: {

		mainButtonText() {
			if (this.gameInProgress) {
				return 'Reset Game';
			} else {
				return 'Start Game';
			}
		}

	},

	methods: {

		selectPlayerType(player, bool) {
			if (player === 'hero') {
				this.heroHumanPlayer = bool;
			} else if (player === 'villian') {
				this.villianHumanPlayer = bool;
			}
		},

		selectHero(hero) {
			this.heroCharacter = hero;
			// this.heroSelectModalOpen = false;

		},

		selectVillian(villian) {
			this.villianCharacter = villian;
			// this.villianSelectModalOpen = false;
		},

		inputBoardSize(e) {
			var number = parseInt(e.target.value)
			if (isNaN(number) || number < 0 || number > 120) {
  				return;
			}
			this.boardSize.rows = number;
			this.boardSize.columns = number;
		},

		test(e) {
			console.log(e);
		}

	}
}
</script>

<!-- <style lang="scss" scoped src="../scss/dragon-ball-battleship.scss"></style> -->

<style lang="scss" scoped>

	table {
		height: 100%;
		width: 100%;
	}

	td {
		border: 1px solid black;
		background-image: none;
		width: auto;
	}

	.ass {
		padding-top: 100%; /* 1:1 Aspect Ratio */
		position: relative; /* If you want text inside of it */
		width: 100%;
	}

	.poo {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}

	// #bothSides {
	// 	border-spacing: 0;
	// 	display: inline-block;
	// 	margin: 0;
	// 	padding: 0;
	// }
	//
	// #left {
	// 	@extend #bothSides;
	//
	// 	td:hover {
	// 		background-color: #00e5e5;
	// 	}
	// }
	//
	// #right {
	// 	@extend #bothSides;
	//
	// 	td:hover {
	// 		background-color: #590059;
	// 	}
	// }

	#imgPlayer1,
	#imgPlayer2 {
		background-color: transparent;
		bottom: 0;
		height: 320px;
		position: fixed;
		width: 320px;
		z-index: -1;
	}

	#imgPlayer1 {
		left: -35px;
	}

	#imgPlayer2 {
		right: -35px;
	}

	.hidden {
		display: none;
	}

	.hit {
		background: url("../assets/dragon-ball-battleship/hit.png") no-repeat center center;
		background-size: contain;
	}

	.miss {
		background: url("../assets/dragon-ball-battleship/miss.png") no-repeat center center;
		background-size: contain;
	}

	.shade {
		background-color: black;
	}

</style>
