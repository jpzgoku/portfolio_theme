<template lang="html">
	<div>

		<h4 class="m-3">High Scores:</h4>
		<table>
			<tr v-for="highScore in this.highScores[this.currentLevel]">
				<td class="p-2 px-3">{{ highScore.title }}</td>
				<td class="p-2 px-3">{{ highScore.seconds }} seconds</td>
			</tr>
		</table>

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

	table {
		max-width: 400px;
		margin: 0 auto;
	}

	tr {
		border-bottom: 1px solid #e3e3e3;
		border-top: 1px solid #e3e3e3;
	}

</style>
