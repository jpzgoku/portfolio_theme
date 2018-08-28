<template lang="html">
  <div>
    <h3>Level Select:</h3>
    <form>

      <input type="button" value="Town" @click="goToTown">
      <input type="button" value="Viking Feast" @click="goToVikingFeast">
      <input type="button" value="Colosseum" @click="goToColosseum">

    </form>
  </div>
</template>

<script>
export default {
	name: 'levelSelect',
	methods: {
		goToTown() {
			Event.$emit('goToTown');
		},

		goToVikingFeast() {
			Event.$emit('goToVikingFeast');
		},

		goToColosseum() {
			Event.$emit('goToColosseum');
		}
	}
}
</script>

<style lang="css" scoped src="../css/modal.css"></style>
