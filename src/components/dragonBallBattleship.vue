<template lang="html">

	<div>
		<b-container>

			<b-row class="text-center mt-5 mb-5">

				<b-col>
					<b-btn-group class="character-settings-buttons m-2">
						<b-button
							variant="outline-primary"
							:pressed="heroHumanPlayer"
							@click="selectPlayerType('hero', true)">
								Player
						</b-button>

						<b-button
							variant="outline-primary"
							:pressed="!heroHumanPlayer"
							@click="selectPlayerType('hero', false)">
								CPU
						</b-button>
					</b-btn-group>

					<b-btn v-b-modal.heroSelectModal class="character-settings-buttons" variant="primary" @click="heroSelectModalOpen = true">
						Heros
					</b-btn>

					<b-btn @click="mainButton">
						Clear Game
					</b-btn>
					<b-btn class="settings-button" v-b-modal.settings>
						Settings
					</b-btn>

					<b-btn v-b-modal.villianSelectModal class="character-settings-buttons" variant="danger" @click="villianSelectModalOpen = true">
						Villians
					</b-btn>

					<b-btn-group class="character-settings-buttons m-2">
						<b-button
							variant="outline-danger"
							:pressed="villianHumanPlayer"
							@click="selectPlayerType('villian', true)">
								Player
						</b-button>

						<b-button
							variant="outline-danger"
							:pressed="!villianHumanPlayer"
							@click="selectPlayerType('villian', false)">
								CPU
						</b-button>

					</b-btn-group>
				</b-col>

			</b-row>

		</b-container>

		<div>
			<b-modal id="settings" title="Settings" header-text-variant="light" header-bg-variant="primary" ok-only>

				<b-row class="text-center">
					<b-col>

						<h4 class="m-4">Heros</h4>

						<div>
							<b-btn v-b-modal.heroSelectModal variant="primary" @click="heroSelectModalOpen = true">
								Character Select
							</b-btn>
						</div>

						<b-btn-group class="m-2">
							<b-button
								variant="outline-primary"
								:pressed="heroHumanPlayer"
								@click="selectPlayerType('hero', true)">
									Player
							</b-button>

							<b-button
								variant="outline-primary"
								:pressed="!heroHumanPlayer"
								@click="selectPlayerType('hero', false)">
									CPU
							</b-button>
						</b-btn-group>

					</b-col>

					<b-col>

						<h4 class="m-4">Villians</h4>

						<div>
							<b-btn v-b-modal.villianSelectModal variant="danger" @click="villianSelectModalOpen = true">
								Character Select
							</b-btn>
						</div>

						<b-btn-group class="m-2">
							<b-button
								variant="outline-danger"
								:pressed="villianHumanPlayer"
								@click="selectPlayerType('villian', true)">
									Player
							</b-button>

							<b-button
								variant="outline-danger"
								:pressed="!villianHumanPlayer"
								@click="selectPlayerType('villian', false)">
									CPU
							</b-button>

						</b-btn-group>

					</b-col>
				</b-row>

			</b-modal>
		</div>

		<!-- <character-select-modals
			@selectHero="selectHero($event)"
			@selectVillian="selectVillian($event)">
		</character-select-modals> -->

		<!-- Use this one if I decide to close the character select modal after choosing a character -->
		<character-select-modals
			:hero-select-modal="heroSelectModalOpen"
			:villian-select-modal="villianSelectModalOpen"
			@selectHero="selectHero($event)"
			@selectVillian="selectVillian($event)">
		</character-select-modals>

		<b-row class="game-board m-0">

			<b-col md="2" class="p-0">
				<div id="imgPlayer1" :class="heroCharacter"></div>
			</b-col>

			<b-col md="4" class="p-0">
				<dbz-character-grid
					ref="heroGrid"
					:character="heroCharacter"
					:gameFinished="gameFinished"
					@endGame="gameFinished = true;">
				</dbz-character-grid>
			</b-col>

			<b-col md="4" class="p-0">
				<dbz-character-grid
					ref="villianGrid"
					:character="villianCharacter"
					:gameFinished="gameFinished"
					@endGame="gameFinished = true;">
				</dbz-character-grid>
			</b-col>

			<b-col md="2" class="p-0">
				<div id="imgPlayer2" :class="villianCharacter"></div>
			</b-col>

		</b-row>

	</div>

</template>

<script>

import CharacterSelectModals from './characterSelectModals.vue';
import DbzCharacterGrid from './dbzCharacterGrid.vue';
import Util from '../js/util';

export default {
	name: 'dragon-ball-battleship',
	components: {
		CharacterSelectModals,
		DbzCharacterGrid
	},

	props: {

		siteUrl: {
			type: String
		}
	},

	data() {
		return {
			gameFinished: false,
			heroHumanPlayer: true,
			villianHumanPlayer: false,
			heroSelect: false,
			villianSelect: false,
			heroCharacter: 'beerus',
			villianCharacter: 'android17',
			heroSelectModalOpen: false,
			villianSelectModalOpen: false
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
			this.heroSelectModalOpen = false;
		},

		selectVillian(villian) {
			this.villianCharacter = villian;
			this.villianSelectModalOpen = false;
		},

		mainButton() {
			this.$refs.heroGrid.emptyBoard();
			this.$refs.villianGrid.emptyBoard();
			this.gameFinished = false;
		}

	}
}
</script>

<style lang="scss" scoped>

	.settings-button {
		display: none;
	}

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

	$smallBrk: 576px;
	$mediumBrk: 768px;
	$largeBrk: 992px;
	$extraLargeBrk: 1200px;

	@media only screen and (max-width: $mediumBrk) {

		.settings-button {
			display: inline-block;
		}

		.character-settings-buttons {
			display: none;
		}

		#imgPlayer1 {
			left: 0px;
			height: 340px;
			position: relative;
			width: auto;
		}

		#imgPlayer2 {
			height: 340px;
			position: absolute;
			right: 0px;
			top: 0;
			width: 100%;
		}

		.game-board {
			padding: 0 20px;
		}
	}

</style>
