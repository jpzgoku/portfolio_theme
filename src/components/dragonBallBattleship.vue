<template lang="html">

	<div>
		<b-container>

			<b-row class="text-center mt-5 mb-5">

				<b-col>
					<b-btn-group class="character-settings-buttons m-2">
						<b-button
							variant="outline-primary"
							:pressed="isHeroHumanPlayer"
							:disabled="gameInProgress"
							@click="selectPlayerType('hero', true)">
								Player
						</b-button>

						<b-button
							variant="outline-primary"
							:pressed="!isHeroHumanPlayer"
							:disabled="gameInProgress"
							@click="selectPlayerType('hero', false)">
								CPU
						</b-button>
					</b-btn-group>

					<b-btn v-b-modal.heroSelectModal class="character-settings-buttons" variant="primary" :disabled="gameInProgress">
						Heros
					</b-btn>

					<b-btn @click="clearGameButton">
						Clear Game
					</b-btn>
					<b-btn class="settings-button" v-b-modal.settings :disabled="gameInProgress">
						Settings
					</b-btn>

					<b-btn v-b-modal.villianSelectModal class="character-settings-buttons" variant="danger" :disabled="gameInProgress">
						Villians
					</b-btn>

					<b-btn-group class="character-settings-buttons m-2">
						<b-button
							variant="outline-danger"
							:pressed="isVillianHumanPlayer"
							:disabled="gameInProgress"
							@click="selectPlayerType('villian', true)">
								Player
						</b-button>

						<b-button
							variant="outline-danger"
							:pressed="!isVillianHumanPlayer"
							:disabled="gameInProgress"
							@click="selectPlayerType('villian', false)">
								CPU
						</b-button>

					</b-btn-group>
				</b-col>

			</b-row>
		</b-container>

		<b-row class="message-area m-0">
			<b-col md="2"></b-col>

			<b-col md="8">
				<b-row>
					<b-col class="mt-1 mb-5">
						<h4 :style="{color: heroColor}">
							{{ heroGridFeedback }}
						</h4>
					</b-col>

					<b-col class="text-right mt-1 mb-5">
						<h4 :style="{color: villianColor}">
							{{ villianGridFeedback }}
						</h4>
					</b-col>
				</b-row>
			</b-col>

			<b-col md="2"></b-col>
		</b-row>

		<settings-modal
			:isHeroHumanPlayer="isHeroHumanPlayer"
			:isVillianHumanPlayer="isVillianHumanPlayer"
			@selectPlayerType="selectPlayerType(...arguments)">
		</settings-modal>

		<character-select-modals
			ref="characterSelectModals"
			@selectHero="selectHero(...arguments)"
			@selectVillian="selectVillian(...arguments)">
		</character-select-modals>

		<b-row class="m-0">

			<b-col md="2" class="p-0">
				<div id="hero-image" :class="heroCharacter"></div>
			</b-col>

			<b-col md="4" class="game-board p-0">
				<dbz-character-grid
					ref="heroGrid"
					:characterColor="heroColor"
					:isOpponentTurn="isVillianTurn"
					:gameInProgress="gameInProgress"
					:gameFinished="gameFinished"
					@startGame="startGame"
					@endOpponentTurn="endVillianTurn($event)"
					@endGame="villianWins">
				</dbz-character-grid>
			</b-col>

			<b-col md="4" class="game-board p-0">
				<dbz-character-grid
					ref="villianGrid"
					:characterColor="villianColor"
					:isOpponentTurn="isHeroTurn"
					:gameInProgress="gameInProgress"
					:gameFinished="gameFinished"
					@startGame="startGame"
					@endOpponentTurn="endHeroTurn($event)"
					@endGame="heroWins">
				</dbz-character-grid>
			</b-col>

			<b-col md="2" class="p-0">
				<div id="villian-image" :class="villianCharacter"></div>
			</b-col>

		</b-row>

	</div>

</template>

<script>

import CharacterSelectModals from './dragonBallBattleship/characterSelectModals.vue';
import DbzCharacterGrid from './dragonBallBattleship/dbzCharacterGrid.vue';
import SettingsModal from './dragonBallBattleship/settingsModal.vue';
import Util from '../js/util';

export default {
	name: 'dragon-ball-battleship',
	
	components: {
		CharacterSelectModals,
		DbzCharacterGrid,
		SettingsModal
	},

	data() {
		return {
			gameInProgress: false,
			gameFinished: false,
			isHeroTurn: true,
			isVillianTurn: true,
			isHeroHumanPlayer: true,
			isVillianHumanPlayer: false,
			heroCharacter: 'beerus',
			villianCharacter: 'android17',
			heroColor: '#885ead',
			villianColor: '#ff1919',
			heroGridFeedback: 'Select your characters before starting.',
			villianGridFeedback: 'Press a gameboard square to start the game.'
		}
	},

	methods: {

		selectPlayerType(player, bool) {
			if (player === 'hero') {
				this.isHeroHumanPlayer = bool;
				this.isHeroTurn = bool;
			} else if (player === 'villian') {
				this.isVillianHumanPlayer = bool;
				this.isVillianTurn = bool;
			}
		},

		selectHero(hero, color) {
			this.heroCharacter = hero;
			this.heroColor = color;
			this.$refs.characterSelectModals.closeHeroModal();
		},

		selectVillian(villian, color) {
			this.villianCharacter = villian;
			this.villianColor = color;
			this.$refs.characterSelectModals.closeVillianModal();
		},

		startGame() {
			this.gameInProgress = true;
			this.heroGridFeedback = '';
			this.villianGridFeedback = '';
		},

		clearGameButton() {
			this.$refs.heroGrid.emptyBoard();
			this.$refs.villianGrid.emptyBoard();
			this.gameInProgress = false;
			this.gameFinished = false;
			this.isHeroTurn = this.isHeroHumanPlayer;
			this.isVillianTurn = this.isVillianHumanPlayer;
			this.heroGridFeedback = 'Select your characters before starting.'
			this.villianGridFeedback = 'Press a gameboard square to start the game.';
		},

		endHeroTurn(message) {
			this.isHeroTurn = false;
			this.isVillianTurn = true;
			this.heroGridFeedback = message;
			if (!this.isVillianHumanPlayer) {
				this.$refs.heroGrid.computerGuess();
			}
		},

		endVillianTurn(message) {
			this.isHeroTurn = true;
			this.isVillianTurn = false;
			this.villianGridFeedback = message;
			if (!this.isHeroHumanPlayer) {
				this.$refs.villianGrid.computerGuess();
			}
		},

		heroWins() {
			this.heroGridFeedback = 'You win!';
			this.villianGridFeedback = "You're finished!";
			this.gameFinished = true;
		},

		villianWins() {
			this.heroGridFeedback = "You're finished!";
			this.villianGridFeedback = 'You win!';
			this.gameFinished = true;
		}

	}
}
</script>

<style lang="scss" scoped>

.settings-button {
	display: none;
}

.message-area {
	height: 100px;
	padding: 0 20px;
}

#hero-image,
#villian-image {
	background-color: transparent;
	bottom: 0;
	height: 320px;
	position: fixed;
	width: 320px;
	z-index: -1;
}

#hero-image {
	left: -35px;
}

#villian-image {
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

	.game-board {
		margin: 0 20px;
	}

	#hero-image {
		left: 0px;
		height: 340px;
		position: relative;
		width: auto;
	}

	#villian-image {
		height: 340px;
		position: absolute;
		right: 0px;
		top: 0;
		width: 100%;
	}

}

</style>
