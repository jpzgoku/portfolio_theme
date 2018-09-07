<template lang="html">
	<b-row class="text-center">
		<b-col>
			<h2 class="m-4">Where's Waldo?</h2>
			<p><span>* Right click at any time to open the options menu!</span></p>

			<level-select
				@goToTown="changeLevelTo('goToTown')"
				@goToVikingFeast="changeLevelTo('goToVikingFeast')"
				@goToColosseum="changeLevelTo('goToColosseum')">
			</level-select>

			<high-scores v-show="this.highScores.length > 0"></high-scores>
		</b-col>
	</b-row>
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

<!-- <style lang="scss" scoped src="../../scss/modal.scss"></style> -->
