<template lang="html">
  <div :class="{'town': town, 'vikingFeast': vikingFeast, 'colosseum': colosseum}"
        @contextmenu="openOptions">

    <options-modal v-show="optionsModalOpen">
    </options-modal>

    <guess-modal v-show="guessModalOpen">
    </guess-modal>

    <message-modal v-show="messageModalOpen">
    </message-modal>

    <win-modal v-show="winModal">
    </win-modal>

    <table id="table">
      <tr v-for="i in row">
        <td v-for="j in column"
            :id="i + '-' + j"
            @click="openModal">

        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// import axios from 'axios';
import OptionsModal from './optionsModal.vue';
import GuessModal from './guessModal.vue';
import MessageModal from './messageModal.vue';
import WinModal from './winModal.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'board',
	components: {
		OptionsModal,
		GuessModal,
		MessageModal,
		WinModal
	},

	computed: {
		...mapGetters([
			'char',
			'seconds',
			'scores',
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
			row: 50,
			column: 82,
			winModal: false,
			id: '',
			clock: ''
		}
	},

	mounted() {
		if (this.town) {
			return this.goToTown();
		} else if (this.vikingFeast) {
			return this.goToVikingFeast();
		} else if (this.colosseum) {
			return this.goToColosseum();
		}

		this.$store.dispatch('toggleOptionsModal', true);
		// Event.$on('closeOptionsModal', () => this.optionsModal = false);
		// Event.$on('closeGuessModal', () => this.guessModalOpen = false);
		// Event.$on('closeMessageModal', () => this.messageModal = false);
		Event.$on('checkGuess', () => this.checkGuess());
		// Event.$on('inputHighScores', () => this.scores = true);
		Event.$on('inputName', (value) => this.inputName(value));
		Event.$on('goToTown', () => this.goToTown());
		Event.$on('goToVikingFeast', () => this.goToVikingFeast());
		Event.$on('goToColosseum', () => this.goToColosseum());
	},

	methods: {
		startTimer() {
			this.clock = setInterval(() => {
				this.$store.dispatch('updateSeconds', this.seconds + 1);
			}, 1000);
		},

		openOptions(e) {
			e.preventDefault();
			return this.$store.dispatch('toggleOptionsModal', true);
		},

		openModal(e) {
			this.id = e.srcElement.id;
			this.$store.dispatch('toggleGuessModal', true);
		},

		checkGuess() {
			if (!this.characters[this.char].found) {
				for (let square in this.characters[this.char].locations) {
					if (this.characters[this.char].locations[square] === this.id) {
						return this.highlightCharacter();
					}
				}
			}

			this.$store.dispatch('updateMessage', 'Nope');
			this.$store.dispatch('toggleMessageModal', true);
			return setTimeout(() => {
				this.$store.dispatch('toggleMessageModal', false);
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
			for (let i in this.characters) {
				if (!this.characters[i].found) {
					this.$store.dispatch('updateMessage', 'Correct');
					this.$store.dispatch('toggleMessageModal', true);
					return setTimeout(() => {
						this.$store.dispatch('toggleMessageModal', false);
					}, 1000);
				}
			}
			clearInterval(this.clock);
			this.winModal = true;
		},

		inputName(value) {
			// axios.post('http://localhost:3000/highScores1', {
			// 	name: value,
			// 	seconds: this.seconds
			// })
			console.log(value);
		},

		changeLevel() {
			// Remove the 'found' class from all TDs
			var tds = document.getElementsByTagName('TD');
			for (let i = 0; i < tds.length; i++) {
				tds[i].classList.remove('found');
			}
			this.winModal = false;
			this.$store.dispatch('toggleOptionsModal', false);
			this.$store.dispatch('showScores', false);
			if (this.clock) {
				clearInterval(this.clock);
				this.$store.dispatch('updateSeconds', 0);
			}
			return this.startTimer();
		},

		goToTown() {
			console.log('Go to town.')
			this.changeLevel();
			this.town = true;
			this.vikingFeast = false;
			this.colosseum = false;
			this.row = 50;
			this.column = 82;
			// axios.get('http://localhost:3000/highScores1')
			// 	.then(response => {
			// 		return this.highScores = response.data
			// 	});
			// axios.get('data/characters1.json')
			// 	.then(response => {
			// 		return this.characters = response.data;
			// 	});
		},

		goToVikingFeast() {
			this.changeLevel();
			this.town = false;
			this.vikingFeast = true;
			this.colosseum = false;
			this.row = 70;
			this.column = 112;
			// axios.get('http://localhost:3000/highScores2')
			// 	.then(response => {
			// 		return this.highScores = response.data
			// 	});
			// axios.get('data/characters2.json')
			// 	.then(response => {
			// 		return this.characters = response.data;
			// 	});
		},

		goToColosseum() {
			this.changeLevel();
			this.town = false;
			this.vikingFeast = false;
			this.colosseum = true;
			this.row = 75;
			this.column = 122;
			// axios.get('http://localhost:3000/highScores3')
			// 	.then(response => {
			// 		return this.highScores = response.data
			// 	});
			// axios.get('data/characters3.json')
			// 	.then(response => {
			// 		return this.characters = response.data;
			// 	});
		}
	}
}
</script>

<style lang="css" scoped>

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
