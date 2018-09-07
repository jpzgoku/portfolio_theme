<template lang="html">
	<div>
		<h3>Level Select:</h3>
		<form>

			<input type="button" value="Town" @click="changeLevelTo('goToTown')">
			<input type="button" value="Viking Feast" @click="changeLevelTo('goToVikingFeast')">
			<input type="button" value="Colosseum" @click="changeLevelTo('goToColosseum')">

		</form>
	</div>
</template>

<script>
export default {
	name: 'levelSelect',
	methods: {

		changeLevelTo(level) {
			this.$emit(level);
		}

	}
}
</script>

<style lang="scss" scoped src="../../scss/modal.scss"></style>
