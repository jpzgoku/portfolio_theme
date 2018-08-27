<template lang="html">
  <div :class="{'town': town, 'vikingFeast': vikingFeast, 'colosseum': colosseum}"
        @contextmenu="openOptions">

    <options-modal v-show="optionsModal">
    </options-modal>

    <guess-modal v-show="isGuessModalOpen">
    </guess-modal>

    <message-modal v-show="messageModal">
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
import { store } from '../js/store.js';
import OptionsModal from './optionsModal.vue';
import GuessModal from './guessModal.vue';
import MessageModal from './messageModal.vue';
import WinModal from './winModal.vue';

export default {
	name: 'board',
	components: {
		OptionsModal,
		GuessModal,
		MessageModal,
		WinModal
	},

	computed: {
		isGuessModalOpen() {
			return this.shared.guessModalOpen;
		}
	},

	data() {
		return {
			town: true,
			vikingFeast: false,
			colosseum: false,
			row: 50,
			column: 82,
			optionsModal: true,
			// guessModalOpen: false,
			messageModal: false,
			winModal: false,
			id: '',
			clock: '',
			shared: store
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
		this.optionsModal = true;
		Event.$on('closeOptionsModal', () => this.optionsModal = false);
		// Event.$on('closeGuessModal', () => this.guessModalOpen = false);
		Event.$on('closeMessageModal', () => this.messageModal = false);
		Event.$on('checkGuess', () => this.checkGuess());
		Event.$on('inputHighScores', () => this.shared.scores = true);
		Event.$on('inputName', (value) => this.inputName(value));
		Event.$on('goToTown', () => this.goToTown());
		Event.$on('goToVikingFeast', () => this.goToVikingFeast());
		Event.$on('goToColosseum', () => this.goToColosseum());
	},

	methods: {
		startTimer() {
			this.clock = setInterval(() => {
				this.shared.seconds++;
			}, 1000);
		},

		openOptions(e) {
			e.preventDefault();
			return this.optionsModal = true;
		},

		openModal(e) {
			this.id = e.srcElement.id;
			this.shared.toggleGuessModal();
		},

		checkGuess() {
			if (!this.shared.characters[this.shared.char].found) {
				for (let square in this.shared.characters[this.shared.char].locations) {
					if (this.shared.characters[this.shared.char].locations[square] === this.id) {
						return this.highlightCharacter();
					}
				}
			}
			this.shared.message = "Nope";
			this.messageModal = true;
			return setTimeout(() => this.messageModal = false, 1000);
		},

		highlightCharacter() {
			this.shared.characters[this.shared.char].found = true;
			for (let square in this.shared.characters[this.shared.char].locations) {
				let cell = this.shared.characters[this.shared.char].locations[square];
				document.getElementById(cell).classList.add('found');
			}
			return this.checkForWin();
		},

		checkForWin() {
			for (let i in this.shared.characters) {
				if (!this.shared.characters[i].found) {
					this.shared.message = "Correct";
					this.messageModal = true;
					return setTimeout(() => this.messageModal = false, 1000);
				}
			}
			clearInterval(this.clock);
			this.winModal = true;
		},

		inputName(value) {
			// axios.post('http://localhost:3000/highScores1', {
			// 	name: value,
			// 	seconds: this.shared.seconds
			// })
			console.log(value);
		},

		changeLevel() {
			// Remove the 'found' class from all TDs
			var x = document.getElementsByTagName('TD');
			for (let i = 0; i < x.length; i++) {
				x[i].classList.remove('found');
			}
			this.winModal = false;
			this.optionsModal = false;
			this.shared.scores = false;
			if (this.clock) {
				clearInterval(this.clock);
				this.shared.seconds = 0;
			}
			return this.startTimer();
		},

		goToTown() {
			this.changeLevel();
			this.town = true;
			this.vikingFeast = false;
			this.colosseum = false;
			this.row = 50;
			this.column = 82;
			// axios.get('http://localhost:3000/highScores1')
			// 	.then(response => {
			// 		return this.shared.highScores = response.data
			// 	});
			// axios.get('data/characters1.json')
			// 	.then(response => {
			// 		return this.shared.characters = response.data;
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
			// 		return this.shared.highScores = response.data
			// 	});
			// axios.get('data/characters2.json')
			// 	.then(response => {
			// 		return this.shared.characters = response.data;
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
			// 		return this.shared.highScores = response.data
			// 	});
			// axios.get('data/characters3.json')
			// 	.then(response => {
			// 		return this.shared.characters = response.data;
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
