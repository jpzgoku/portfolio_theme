<template lang="html">

	<b-modal id="winModal" ref="winModal" size="lg" hide-header hide-footer centered no-close-on-esc no-close-on-backdrop no-fade>

		<b-row class="text-center">
			<b-col>
				<h2 class="m-5">You Win!</h2>
				<h4 class="m-4">Your score: {{ this.seconds }} seconds</h4>

				<b-container>
					<b-form v-if="!scoreSubmitted" inline>
						<label class="sr-only" for="inlineFormInputName">Enter Your Name</label>
							<b-input v-model="playerName" class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName" placeholder="Enter Your Name" />
						<b-button :disabled="submittingScore" variant="secondary" @click="inputName">Submit High Score</b-button>
					</b-form>

					<p class="text-danger" v-if="postFailMessage">{{ this.postFailMessage }}</p>
				</b-container>

				<high-scores></high-scores>

				<level-select
					@goToTown="changeLevelTo('goToTown')"
					@goToVikingFeast="changeLevelTo('goToVikingFeast')"
					@goToColosseum="changeLevelTo('goToColosseum')">
				</level-select>
			</b-col>
		</b-row>

	</b-modal>

</template>

<script>
import axios from 'axios';
import LevelSelect from './levelSelect.vue';
import HighScores from './highScores.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'winModal',
	components: {
		LevelSelect,
		HighScores
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
			playerName: '',
			submittingScore: false,
			scoreSubmitted: false,
			postFailMessage: ''
		}
	},

	methods: {

		openModal() {
			this.$refs.winModal.show();
		},

		closeModal() {
			this.$refs.winModal.hide();
		},

		inputName() {
			if (!this.playerName) return false;

			this.submittingScore = true;

			var url = this.siteUrl + '/wp-json/wheres-waldo/v1/high-score';
			let data = {
				title: this.playerName,
				seconds: this.seconds,
				level: this.currentLevel
			};

			axios.post(url, data)
			.then(response => {
				var oldHighScores = this.highScores;
				oldHighScores[this.currentLevel].splice(this.scoreIndex(), 0, data);
				this.$store.dispatch('setHighScoresData', oldHighScores);
				this.scoreSubmitted = true;
				this.submittingScore = false;
				this.postFailMessage = '';
			})
			.catch(error => {
				this.postFailMessage = '* Unsuccessful submission';
				this.submittingScore = false;
			});
		},

		changeLevelTo(level) {
			this.postFailMessage = '';
			this.scoreSubmitted = false;
			this.$emit(level);
		},

		scoreIndex() {
			for (var level in this.highScores[this.currentLevel]) {
				if (this.seconds <= this.highScores[this.currentLevel][level].seconds) {
					return level;
				}
			}
			return this.highScores[this.currentLevel].length;
		}

	}
}
</script>

<style lang="css" scoped>

	form {
		display: inline-block;
	}

</style>
