<template lang="html">
	<div>

		<h3>High Scores:</h3>
		<ul>
			<li v-for="highscore in this.highScores">
				{{ highscore.name }} - {{ highscore.seconds }} seconds
			</li>
		</ul>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'highScores',

	computed: {
		...mapGetters([
			'highScores'
		])
	}
}
</script>

<style lang="scss" scoped src="../scss/modal.scss"></style>
