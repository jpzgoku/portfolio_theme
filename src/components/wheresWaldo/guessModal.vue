<template lang="html">
	<div class="custom-modal">

		<div class="modal-content">

			<div class="close-button-div">
				<button class="close" @click="close">
					&times;
				</button>
			</div>

			<h3>What do you see?</h3>
			<form>

				<input v-for="character in this.characters"
					type="button"
					:value="capitalize(character.name)"
					@click="makeGuess(character.name)"
					:disabled="character.found">

			</form>
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';

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

		makeGuess(name) {
			this.$store.dispatch('updateChar', name);
			this.$emit('checkGuess');
			this.close();
		},

		capitalize(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}
}
</script>

<style lang="scss" scoped src="../../scss/modal.scss"></style>
