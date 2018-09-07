<template lang="html">
	<div class="nav-bar-padding">
		<div :class="{'town': town, 'vikingFeast': vikingFeast, 'colosseum': colosseum}" @contextmenu="openOptions">

			<b-modal id="optionsModal" ref="optionsModal" size="lg" title="Options Menu" hide-footer centered>
				<options-modal
					@goToTown="goToTown"
					@goToVikingFeast="goToVikingFeast"
					@goToColosseum="goToColosseum">
				</options-modal>
			</b-modal>

			<b-modal id="guessModal" ref="guessModal" size="lg" title="What do you see?" hide-footer centered no-fade>
				<b-row class="text-center">
					<b-col>
						<b-button v-for="character in this.characters"
							class="m-1"
							variant="secondary"
							@click="makeGuess(character.name)"
							:disabled="character.found">
							{{ character.name }}
						</b-button>
					</b-col>
				</b-row>
			</b-modal>

			<b-modal id="messageModal" ref="messageModal" size="lg" hide-header hide-footer centered no-fade>
				<h2 class="text-center">{{ this.message }}</h2>
			</b-modal>

			<!-- <win-modal
				v-show="winModalOpen"
				@inputName="inputName($event)"
				@goToTown="goToTown"
				@goToVikingFeast="goToVikingFeast"
				@goToColosseum="goToColosseum">
			</win-modal> -->

			<table>
				<tr v-for="row in rows">

					<td v-for="column in columns"
						:id="row + '-' + column"
						@click="openModal">
					</td>

				</tr>
			</table>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import OptionsModal from './wheresWaldo/optionsModal.vue';
// import WinModal from './wheresWaldo/winModal.vue';
import { mapGetters } from 'vuex';
import TownCharacters from '../data/town.json';
import VikingFeastCharacters from '../data/vikingFeast.json';
import ColosseumCharacters from '../data/colosseum.json';
import HighScoresData from '../data/db.json';
import Util from '../js/util';

export default {
	name: 'wheres-waldo',
	components: {
		OptionsModal,
		// WinModal
	},

	computed: {
		...mapGetters([
			'char',
			'seconds',
			'inputScore',
			'message',
			'highScores',
			'characters',
			'optionsModalOpen',
			'guessModalOpen',
			'messageModalOpen'
		])
	},

	data() {
		return {
			town: true,
			vikingFeast: false,
			colosseum: false,
			rows: 50,
			columns: 82,
			winModalOpen: false,
			id: '',
			clock: ''
		}
	},

	mounted() {
		if (this.town) {
			this.goToTown();
		} else if (this.vikingFeast) {
			this.goToVikingFeast();
		} else if (this.colosseum) {
			this.goToColosseum();
		}

		this.$refs.optionsModal.show();
		// this.$store.dispatch('toggleOptionsModal', true);
	},

	methods: {

		capitalize(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		},

		startTimer() {
			this.clock = setInterval(() => {
				this.$store.dispatch('updateSeconds', this.seconds + 1);
			}, 1000);
		},

		openOptions(e) {
			e.preventDefault();
			this.$refs.optionsModal.show();
			// this.$store.dispatch('toggleOptionsModal', true);
		},

		openModal(e) {
			this.id = e.srcElement.id;
			this.$refs.guessModal.show();
			// this.$store.dispatch('toggleGuessModal', true);
		},

		makeGuess(name) {
			this.$store.dispatch('updateChar', name);
			this.$refs.guessModal.hide();
			if (!this.characters[this.char].found) {
				for (let square in this.characters[this.char].locations) {
					if (this.characters[this.char].locations[square] === this.id) {
						return this.highlightCharacter();
					}
				}
			}

			this.$store.dispatch('updateMessage', 'Nope');
			this.$refs.messageModal.show();
			// this.$store.dispatch('toggleMessageModal', true);
			return setTimeout(() => {
				this.$refs.messageModal.hide();
				// this.$store.dispatch('toggleMessageModal', false);
			}, 1000);
		},

		highlightCharacter() {
			this.characters[this.char].found = true;
			for (let square in this.characters[this.char].locations) {
				let cell = this.characters[this.char].locations[square];
				document.getElementById(cell).classList.add('found');
			}
			return this.checkForWin();
		},

		checkForWin() {
			for (let character in this.characters) {
				if (!this.characters[character].found) {
					this.$store.dispatch('updateMessage', 'Correct');
					this.$refs.messageModal.show();
					// this.$store.dispatch('toggleMessageModal', true);
					return setTimeout(() => {
						this.$refs.messageModal.hide();
						// this.$store.dispatch('toggleMessageModal', false);
					}, 1000);
				}
			}
			clearInterval(this.clock);
			this.winModalOpen = true;
		},

		inputName(name) {
			console.log(name);
			// var url = './wp-content/themes/my-project/src/data/db.json';
			// axios.post(url, {
			// 	name: name,
			// 	seconds: this.seconds
			// });
		},

		changeLevel() {
			Util.clearBoard('found', 'hit');
			this.winModalOpen = false;
			// this.$store.dispatch('toggleOptionsModal', false);
			this.$refs.optionsModal.hide();
			this.$store.dispatch('displayInputScore', false);
			if (this.clock) {
				clearInterval(this.clock);
				this.$store.dispatch('updateSeconds', 0);
			}
			return this.startTimer();
		},

		goToTown() {
			this.changeLevel();
			this.town = true;
			this.vikingFeast = false;
			this.colosseum = false;
			this.rows = 50;
			this.columns = 82;
			this.$store.dispatch('updateCharacters', TownCharacters);
			this.$store.dispatch('setHighScores', HighScoresData.town);
		},

		goToVikingFeast() {
			this.changeLevel();
			this.town = false;
			this.vikingFeast = true;
			this.colosseum = false;
			this.rows = 70;
			this.columns = 112;
			this.$store.dispatch('updateCharacters', VikingFeastCharacters);
			this.$store.dispatch('setHighScores', HighScoresData.vikingFeast);
		},

		goToColosseum() {
			this.changeLevel();
			this.town = false;
			this.vikingFeast = false;
			this.colosseum = true;
			this.rows = 75;
			this.columns = 122;
			this.$store.dispatch('updateCharacters', ColosseumCharacters);
			this.$store.dispatch('setHighScores', HighScoresData.colosseum);
		}
	}
}
</script>

<style lang="css" scoped>

	.nav-bar-padding {
		padding: 56px 0 0 0;
	}

	table {
		border-collapse: collapse;
	}

	td {
		box-sizing: border-box;
		height: 25px;
		width: 25px;
	}

	.found {
		border: 2px solid blue;
	}

</style>
