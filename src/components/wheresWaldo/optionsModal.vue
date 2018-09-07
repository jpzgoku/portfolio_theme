<template lang="html">
	<div class="custom-modal">

		<div class="modal-content">
			<button class="close" @click="close">
				&times;
			</button>

			<h1>Where's Waldo?</h1>
			<h3>Options Menu</h3>
			<p><span>* Right click at any time to open the options menu!</span></p>

			<level-select
				@goToTown="changeLevelTo('goToTown')"
				@goToVikingFeast="changeLevelTo('goToVikingFeast')"
				@goToColosseum="changeLevelTo('goToColosseum')">
			</level-select>

			<high-scores v-show="this.highScores.length > 0"></high-scores>

		</div>

	</div>
</template>

<script>
import LevelSelect from './levelSelect.vue';
import HighScores from './highScores.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'optionsModal',
	components: {
		LevelSelect,
		HighScores
	},

	computed: {
		...mapGetters([
			'highScores'
		])
	},

	methods: {
		close() {
			this.$store.dispatch('toggleOptionsModal', false);
		},

		changeLevelTo(level) {
			this.$emit(level);
		}
	}
}
</script>

<style lang="scss" scoped src="../../scss/modal.scss"></style>
