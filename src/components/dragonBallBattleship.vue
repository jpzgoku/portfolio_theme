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

		<div style="text-align: center">
			<table style="background-color: #fff; display: inline-block">
				<tr v-for="row in boardSize.rows">
					<td v-for="column in boardSize.columns" :data="row + '-' + column"></td>
				</tr>
			</table>

			<table style="background-color: #fff; display: inline-block">
				<tr v-for="row in boardSize.rows">
					<td v-for="column in boardSize.columns" :data="row + '-' + column"></td>
				</tr>
			</table>
		</div>

		<div>
			<div id="imgPlayer1" :class="heroCharacter"></div>
			<div id="imgPlayer2" :class="villianCharacter"></div>
		</div>

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
		}

	}
}
</script>

<style lang="scss" scoped src="../scss/dragon-ball-battleship.scss"></style>

<style lang="scss" scoped>

</style>
