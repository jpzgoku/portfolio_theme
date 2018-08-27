<template lang="html">
  <div class="modal">

    <div class="modal-content">

      <h1>You Win!</h1>
      <h3>{{this.shared.seconds}} seconds</h3>
      <level-select></level-select>

      <div v-show="this.shared.highScores.length > 0">
        <high-scores></high-scores>
        <input type="button" value="Enter Your Score!" @click="inputHighScores">

        <div v-show="this.shared.scores">
          <input type="text" placeholder="Name" @keyup.enter="inputName">
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import {
	store
} from '../js/store.js';
import LevelSelect from './levelSelect.vue';
import HighScores from './highScores.vue';

export default {
	name: 'winModal',
	components: {
		LevelSelect,
		HighScores
	},
	data() {
		return {
			shared: store
		}
	},
	methods: {
		inputHighScores() {
			Event.$emit('inputHighScores');
		},
		inputName(e) {
			let value = e.srcElement.value
			Event.$emit('inputName', value);
		}
	}
}
</script>

<style lang="css" scoped src="../css/modal.css"></style>
