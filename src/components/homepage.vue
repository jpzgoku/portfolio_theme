<template lang="html">
	<div>

		<div class="text-center header" :style="mainBackgroundImage">

			<h1 class="p-5">
				I'm John Zarek
			</h1>
			<b-btn variant="outline-primary" href="#">Let's Build</b-btn>

		</div>

		<b-container>
			<h2 class="mt-5 pt-5 text-center">About Me</h2>
			<b-row>

				<b-col md="6" class="mt-5 about-me-img">
					<b-img src="/wp-content/themes/portfolio/src/assets/homepage/about-me.jpg" fluid/>
				</b-col>

				<b-col md="6">
					<div class="mt-5 mb-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>

					<div class="mt-5 mb-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>

					<div class="mt-5 mb-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</b-col>
			</b-row>
		</b-container>

		<b-container class="my-work">
			<h2 class="mt-5 pt-5 text-center">My Work</h2>

			<b-row>

				<b-col lg="6" class="p-5">
					<div class="single-work">
						<b-img src="/wp-content/themes/portfolio/src/assets/homepage/williamzarek.png" fluid/>
						<div class="overlay">
							<div class="text">Hello World</div>
						</div>
					</div>
				</b-col>

				<b-col lg="6" class="p-5">
					<div class="single-work">
						<b-img src="/wp-content/themes/portfolio/src/assets/homepage/zarekprivateteaching.png" fluid/>
						<div class="overlay">
							<div class="text">Hello World</div>
						</div>
					</div>
				</b-col>

			</b-row>

		</b-container>

	</div>
</template>

<script>
export default {
	name: 'homepage',

	props: {

		featuredImage: {
			type: String
		}

	},

	computed: {

		mainBackgroundImage() {
			return `background-image: url(${this.featuredImage})`;
		}
	},

	mounted() {
		console.log(this.aboutMeImage);
	}

}
</script>

<style lang="scss">

div.header {
	height:100vh;
	padding: 200px 0;
}

.about-me-img {
	text-align: center;

	img {
		height: 450px;
	}
}

.my-work {

	div.row {

		div.single-work {
			position: relative;

			&:hover .overlay {
				height: 100%;
			}

			img.img-fluid {

			}

			.overlay {
				background: rgba(0, 0, 0, 0.5);
				bottom: 0;
				height: 0;
				left: 0;
				overflow: hidden;
				position: absolute;
				right: 0;
				transition: .5s ease;
				width: 100%;
			}

			.text {
				color: white;
				font-size: 20px;
				position: absolute;
				top: 50%;
				left: 50%;
				-webkit-transform: translate(-50%, -50%);
				-ms-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
				text-align: center;
			}

		}

	}

}


</style>
