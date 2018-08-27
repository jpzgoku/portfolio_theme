<template lang="html">
  <div class="modal">

    <div class="modal-content">
      <button class="close" @click="close">
        &times;
      </button>

      <h3>What do you see?</h3>
      <form>

        <input v-for="i in this.shared.characters"
              type="button"
              :value="capitalize(i.name)"
              @click="makeGuess(i.name)"
              :disabled="i.found">

      </form>
    </div>

  </div>
</template>

<script>
import { store } from '../js/store.js';

export default {
	name: 'guessModal',
	data() {
		return {
			shared: store
		}
	},
	methods: {
		close() {
			this.shared.toggleGuessModal();
		},

		makeGuess(n) {
			this.shared.char = n;
			Event.$emit('checkGuess');
			this.close();
		},

		capitalize(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}
}
</script>

<style lang="css" scoped src="../css/modal.css"></style>
