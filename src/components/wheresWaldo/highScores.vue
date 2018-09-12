<template lang="html">
	<div>

		<h4 class="m-3">High Scores:</h4>
		<ul>
			<li v-for="highScore in this.highScores">
				<span v-if="highScore.level === currentLevel">
					{{ highScore.title.rendered }} - {{ highScore.seconds }} seconds
				</span>
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
