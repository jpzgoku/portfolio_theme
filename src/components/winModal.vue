<template lang="html">
	<div class="modal">

		<div class="modal-content">

			<h1>You Win!</h1>
			<h3>{{ this.seconds }} seconds</h3>
			<level-select
				@goToTown="changeLevelTo('goToTown')"
				@goToVikingFeast="changeLevelTo('goToVikingFeast')"
				@goToColosseum="changeLevelTo('goToColosseum')">
			</level-select>

			<div v-show="this.highScores.length > 0">
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
import LevelSelect from './levelSelect.vue';
import HighScores from './highScores.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'winModal',
	components: {
		LevelSelect,
		HighScores
	},

	computed: {
		...mapGetters([
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
			this.$emit('inputName', name);
		},

		changeLevelTo(level) {
			this.$emit(level);
		}
	}
}
</script>

<style lang="css" scoped src="../css/modal.css"></style>
