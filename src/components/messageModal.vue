<template lang="html">
  <div class="modal" @click="close">

    <div class="modal-content">
      <h1>{{ this.message }}</h1>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'messageModal',

	computed: {
		...mapGetters([
			'message'
		])
	},

	methods: {
		close() {
			this.$store.dispatch('toggleMessageModal', false);
		}
	}
}
</script>

<style lang="css" scoped src="../css/modal.css"></style>
