<template lang="html">
  <div class="modal">

    <div class="modal-content">

      <h1>You Win!</h1>
      <h3>{{ this.seconds }} seconds</h3>
      <level-select></level-select>

      <div v-show="this.highScores.length > 0">
        <high-scores></high-scores>
        <input type="button" value="Enter Your Score!" @click="inputHighScores">

        <div v-show="this.scores">
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
			'scores',
			'highScores'
		])
	},

	methods: {

		inputHighScores() {
			this.$store.dispatch('showScores', true);
		},

		inputName(e) {
			let value = e.srcElement.value
			Event.$emit('inputName', value);
		}
	}
}
</script>

<style lang="css" scoped src="../css/modal.css"></style>
