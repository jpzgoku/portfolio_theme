<template lang="html">

	<b-modal id="optionsModal" ref="optionsModal" size="lg" title="Options Menu" hide-footer centered>
		<b-row class="text-center">
			<b-col>
				<h2 class="m-4">Where's Waldo?</h2>
				<p><span>* Right click at any time to open the options menu!</span></p>

				<level-select
					@goToTown="changeLevelTo('goToTown')"
					@goToVikingFeast="changeLevelTo('goToVikingFeast')"
					@goToColosseum="changeLevelTo('goToColosseum')">
				</level-select>
				
				<high-scores></high-scores>
			</b-col>
		</b-row>
	</b-modal>

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
			'currentLevel',
			'highScores'
		])
	},

	methods: {

		openModal() {
			this.$refs.optionsModal.show();
		},

		closeModal() {
			this.$refs.optionsModal.hide();
		},

		changeLevelTo(level) {
			this.$emit(level);
		}
	}
}
</script>

<style lang="scss" scoped></style>
