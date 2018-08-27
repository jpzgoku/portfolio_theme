<template lang="html">
  <div>

    <h3>High Scores:</h3>
    <ul>
      <li v-for="i in shared.highScores">
        {{i.name}} - {{i.seconds}} seconds
      </li>
    </ul>

  </div>
</template>

<script>

import { store } from '../js/store.js';

export default {
  name: 'highScores',
  data() {
    return {
      shared: store
    }
  }
}

</script>

<style lang="css" scoped src="../css/modal.css"></style>
