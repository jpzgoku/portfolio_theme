<template lang="html">
	<b-container>
		<b-row class="mt-5 mb-3 text-center-medium">
			<b-col>
				<h3>
					{{ company }}
					<span v-if="websiteName && websiteURL" class="hide-small-medium pl-2">
						<a :href="websiteURL" target="_blank">( {{ websiteName }} )</a>
					</span>
				</h3>
				<span v-if="websiteName && websiteURL" class="show-small-medium">
					<a :href="websiteURL" target="_blank">( {{ websiteName }} )</a>
				</span>
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

		websiteURL: {
			type: String
		},

		websiteName: {
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

.show-small-medium {
	display: none;
	font-size: 1.25rem;
}

.hide-small-medium {
	display: initial;
	font-size: 1.25rem;
}

.text-right-not-medium {
	text-align: right;
}

@media only screen and (max-width: $mediumBrk) {

	.show-small-medium {
		display: initial;
	}

	.hide-small-medium {
		display: none;
	}

	.text-center-medium {
		text-align: center;
	}

	.text-right-not-medium {
		text-align: center;
	}

}

</style>
