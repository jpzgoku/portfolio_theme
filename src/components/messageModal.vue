<template lang="html">
  <div class="modal" @click="close">

    <div class="modal-content">
      <h1>{{shared.message}}</h1>
    </div>

  </div>
</template>

<script>

import { store } from '../js/store.js';

export default {
  name: 'messageModal',
  data() {
    return {
      shared: store
    }
  },
  methods: {
    close() {
      Event.$emit('closeMessageModal');
    }
  }
}
</script>

<style lang="css" scoped src="../css/modal.css"></style>
