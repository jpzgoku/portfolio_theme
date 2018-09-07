<template lang="html">
	<div>

		<h4 class="m-3">High Scores:</h4>
		<ul>
			<li v-for="highscore in this.highScores[this.currentLevel]">
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
			'currentLevel',
			'highScores'
		])
	}
}
</script>

<style lang="scss" scoped>

	ul {
		padding: 0;
	}

	li {
		list-style: none;
	}

</style>
