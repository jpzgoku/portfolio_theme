<template lang="html">
  <div>

    <h3>High Scores:</h3>
    <ul>
      <li v-for="i in this.highScores">
        {{i.name}} - {{i.seconds}} seconds
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

<style lang="css" scoped src="../css/modal.css"></style>
