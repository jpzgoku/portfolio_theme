<template lang="html">
  <div class="modal">

    <div class="modal-content">
      <button class="close" @click="close">
        &times;
      </button>

      <h3>What do you see?</h3>
      <form>

        <input v-for="i in this.characters"
              type="button"
              :value="capitalize(i.name)"
              @click="makeGuess(i.name)"
              :disabled="i.found">

      </form>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { eventBus } from '../main'

export default {
	name: 'guessModal',

	computed: {
		...mapGetters([
			'char',
			'characters'
		])
	},

	methods: {
		close() {
			this.$store.dispatch('toggleGuessModal', false);
		},

		makeGuess(n) {
			this.char = n;
			this.$emit('checkGuess');
			this.close();
		},

		capitalize(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}
}
</script>

<style lang="css" scoped src="../css/modal.css"></style>
