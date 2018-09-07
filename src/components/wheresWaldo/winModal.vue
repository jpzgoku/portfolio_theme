<template lang="html">
	<div class="custom-modal">

		<div class="modal-content">

			<h2>You Win!</h2>
			<h3>{{ this.seconds }} seconds</h3>
			<level-select
				@goToTown="changeLevelTo('goToTown')"
				@goToVikingFeast="changeLevelTo('goToVikingFeast')"
				@goToColosseum="changeLevelTo('goToColosseum')">
			</level-select>

			<!-- <div v-show="this.highScores[this.currentLevel].length"> -->
			<div>
				<high-scores></high-scores>
				<input type="button" value="Enter Your Score!" @click="inputHighScores">

				<div v-show="this.inputScore">
					<input type="text" placeholder="Name" @keyup.enter="inputName">
				</div>
			</div>

		</div>

	</div>
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
			'inputScore',
			'highScores'
		])
	},

	methods: {

		inputHighScores() {
			this.$store.dispatch('displayInputScore', true);
		},

		inputName(e) {
			let name = e.srcElement.value;
			// '/wp-content/themes/my-project/src/data/db.json';
			// '/wp-json/wp/v2/pages';
			var url = this.siteUrl + '/wp-content/themes/my-project/src/data/db.json';
			axios.post(url, {
				name: name,
				seconds: this.seconds
			})
			.catch(function(error) {
				console.log(error);
			});
		},

		changeLevelTo(level) {
			this.$emit(level);
		}
	}
}
</script>

<style lang="scss" scoped src="../../scss/modal.scss"></style>
