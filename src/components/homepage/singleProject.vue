<template lang="html">
	<b-col class="project-container py-5" lg="6">
		<div class="project">
			<b-img :src="this.projectImage" fluid/>
			<div class="overlay">
				<div class="text">
					<slot></slot>
				</div>
			</div>
		</div>
	</b-col>
</template>

<script>
export default {
	name: 'single-project',

	props: {

		projectImage: {
			type: String
		}

	}
}
</script>

<style lang="scss" scoped>

.project-container {
	margin: 0 auto;
}

div.project {
	position: relative;

	&:hover .overlay {
		height: 100%;
	}

	.overlay {
		background: rgba(0, 0, 0, 0.8);
		bottom: 0;
		color: #fff;
		height: 0;
		left: 0;
		overflow: hidden;
		position: absolute;
		right: 0;
		transition: .5s ease;
		width: 100%;
	}

	.text {
		color: #cccdcf;
		left: 50%;
		position: absolute;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);

		a {
			color: inherit;

			&:hover {
				color: #fff;
			}
		}

		p {
			font-size: 12px;
			line-height: 20px;
		}
	}

}
</style>
