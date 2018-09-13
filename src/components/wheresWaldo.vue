<template lang="html">
	<div class="nav-bar-padding">
		<div :class="currentLevel" @contextmenu="openOptions">

			<options-modal
				ref="optionsModal"
				@goToTown="goToTown"
				@goToVikingFeast="goToVikingFeast"
				@goToColosseum="goToColosseum">
			</options-modal>

			<b-modal id="guessModal" ref="guessModal" size="lg" title="What do you see?" hide-footer centered no-fade>
				<b-row class="text-center">
					<b-col>
						<b-button v-for="character in this.characters"
							class="m-1"
							variant="secondary"
							:key="character.name"
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

			<win-modal
				ref="winModal"
				:siteUrl="siteUrl"
				@goToTown="goToTown"
				@goToVikingFeast="goToVikingFeast"
				@goToColosseum="goToColosseum">
			</win-modal>

			<table>
				<tr v-for="row in rows">

					<td v-for="column in columns"
						:id="row + '-' + column"
						@click="openGuessModal">
					</td>

				</tr>
			</table>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import OptionsModal from './wheresWaldo/optionsModal.vue';
import WinModal from './wheresWaldo/winModal.vue';
import { mapGetters } from 'vuex';
import TownCharacters from '../data/town.json';
import VikingFeastCharacters from '../data/vikingFeast.json';
import ColosseumCharacters from '../data/colosseum.json';
import Util from '../js/util';

export default {
	name: 'wheres-waldo',
	components: {
		OptionsModal,
		WinModal
	},

	props: {

		siteUrl: {
			type: String
		}

	},

	computed: {
		...mapGetters([
			'currentLevel',
			'seconds',
			'highScores'
		])
	},

	data() {
		return {
			message: 'You Win!',
			rows: 50,
			columns: 82,
			id: '',
			clock: '',
			characters: {},
			characterName: ''
		}
	},

	mounted() {

		var url = this.siteUrl + '/wp-json/wheres-waldo/v1/high-scoreasas';
		axios.get(url)
		.then(response => {
			this.$store.dispatch('setHighScoresData', response.data);
		})
		.catch(function(error) {
			console.log(error);
		});

		if (this.currentLevel === 'town') {
			this.goToTown();
		} else if (this.currentLevel === 'vikingFeast') {
			this.goToVikingFeast();
		} else if (this.currentLevel === 'colosseum') {
			this.goToColosseum();
		}

		this.$refs.optionsModal.openModal();
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
			this.$refs.optionsModal.openModal();
		},

		openGuessModal(e) {
			this.id = e.srcElement.id;
			this.$refs.guessModal.show();
		},

		makeGuess(name) {
			this.characterName = name;
			this.$refs.guessModal.hide();
			if (!this.characters[this.characterName].found) {
				for (let square in this.characters[this.characterName].locations) {
					if (this.characters[this.characterName].locations[square] === this.id) {
						return this.highlightCharacter();
					}
				}
			}

			this.message = 'Nope';
			this.$refs.messageModal.show();
			return setTimeout(() => {
				this.$refs.messageModal.hide();
			}, 1000);
		},

		highlightCharacter() {
			this.characters[this.characterName].found = true;
			for (let square in this.characters[this.characterName].locations) {
				let cell = this.characters[this.characterName].locations[square];
				document.getElementById(cell).classList.add('found');
			}
			this.checkForWin();
		},

		checkForWin() {
			for (let character in this.characters) {
				if (!this.characters[character].found) {
					this.message = 'Correct';
					this.$refs.messageModal.show();
					return setTimeout(() => {
						this.$refs.messageModal.hide();
					}, 1000);
				}
			}
			clearInterval(this.clock);
			this.$refs.winModal.openModal();
		},

		changeLevel() {
			Util.clearBoard('found', 'hit');
			for (var character in this.characters) {
				this.characters[character].found = false;
			}
			this.$refs.winModal.closeModal();
			this.$refs.optionsModal.closeModal();
			if (this.clock) {
				clearInterval(this.clock);
				this.$store.dispatch('updateSeconds', 0);
			}
			this.startTimer();
		},

		goToTown() {
			this.changeLevel();
			this.$store.dispatch('setCurrentLevel', 'town');
			this.rows = 50;
			this.columns = 82;
			this.characters = TownCharacters;
		},

		goToVikingFeast() {
			this.changeLevel();
			this.$store.dispatch('setCurrentLevel', 'vikingFeast');
			this.rows = 70;
			this.columns = 112;
			this.characters = VikingFeastCharacters;
		},

		goToColosseum() {
			this.changeLevel();
			this.$store.dispatch('setCurrentLevel', 'colosseum');
			this.rows = 75;
			this.columns = 122;
			this.characters = ColosseumCharacters;
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
