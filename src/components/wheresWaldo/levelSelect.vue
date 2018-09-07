<template lang="html">
	<div class="m-4">
		<h4 class="m-3">Level Select:</h4>

		<b-button
			class="m-1"
			@click="changeLevelTo('goToTown')">
				Town
		</b-button>

		<b-button
			class="m-1"
			@click="changeLevelTo('goToVikingFeast')">
				Viking Feast
		</b-button>

		<b-button
			class="m-1"
			@click="changeLevelTo('goToColosseum')">
				Colosseum
		</b-button>

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

<style lang="scss" scoped></style>
