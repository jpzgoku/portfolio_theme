<template lang="html">
  <div class="modal">

    <div class="modal-content">
      <button class="close" @click="close">
        &times;
      </button>

      <h1>Where's Waldo?</h1>
      <h3>Options Menu</h3>
      <p><span>* Right click at any time to open the options menu!</span></p>

      <level-select></level-select>

      <high-scores v-show="this.shared.highScores.length > 0"></high-scores>

    </div>

  </div>
</template>

<script>

import { store } from '../js/store.js';
import LevelSelect from './levelSelect.vue';
import HighScores from './highScores.vue';

export default {
  name: 'optionsModal',
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
    close() {
      Event.$emit('closeOptionsModal');
    }
  }
}

</script>

<style lang="css" scoped src="../css/modal.css"></style>
