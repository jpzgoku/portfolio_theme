<template lang="html">
	<b-container>
		<b-row>
			<b-col class="my-3 text-center-medium">
				<h3>{{ company }}</h3>
			</b-col>
		</b-row>
		<b-row>
			<b-col class="my-3 text-center-medium" md="6">
				<h4>{{ jobTitle }}</h4>
			</b-col>
			<b-col class="my-3 text-right-not-medium" md="6">
				<h4>{{ dates }}</h4>
			</b-col>
		</b-row>
		<b-row>
			<b-col class="my-3 text-center-medium" md="4">
				<b-img :src="workPlaceImg" fluid/>
			</b-col>
			<b-col class="my-3" md="8">
				<slot></slot>
			</b-col>
		</b-row>
  	</b-container>
</template>

<script>

export default {
	name: 'previous-job',

	props: {

		company: {
			type: String
		},

		jobTitle: {
			type: String
		},

		dates: {
			type: String
		},

		workPlaceImg: {
			type: String
		}

	}
}

</script>

<style lang="scss" scoped>

$mediumBrk: 768px;

.text-right-not-medium {
	text-align: right;
}

@media only screen and (max-width: $mediumBrk) {

	.text-center-medium {
		text-align: center;
	}

	.text-right-not-medium {
		text-align: center;
	}

}

</style>
