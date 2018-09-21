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

		<b-container>
			<h2 class="mt-5 pt-5 text-center">My Work</h2>

			<b-row>

				<single-project
					projectImage="/wp-content/themes/portfolio/src/assets/homepage/williamzarek.png">

					<h4><a href="http://www.williamzarek.com/" target="_blank">williamzarek.com</a></h4>

					<p>
						A custom Wordpress portfolio website for a 3D animator.
					</p>

				</single-project>

				<single-project
					projectImage="/wp-content/themes/portfolio/src/assets/homepage/zarekprivateteaching.png">

					<h4><a href="http://zarekprivateteaching.com/en/" target="_blank">zarekprivateteaching.com</a></h4>

					<p>
						The website that I previously used to find students for private English lessons in Vietnam.
					</p>

				</single-project>

			</b-row>

		</b-container>

		<b-container>
			<h2 class="mt-5 pt-5 text-center">My Projects</h2>

			<b-row>

				<single-project
					projectImage="/wp-content/themes/portfolio/src/assets/homepage/williamzarek.png">

					<h4><a href="#" target="_blank"></a>Dragon Ball Battleship</h4>

				</single-project>

				<single-project
					projectImage="/wp-content/themes/portfolio/src/assets/homepage/zarekprivateteaching.png">

					<h4><a href="#" target="_blank"></a>Where's Waldo</h4>

				</single-project>

				<single-project
					projectImage="/wp-content/themes/portfolio/src/assets/homepage/williamzarek.png">

					<h4><a href="#" target="_blank"></a>Minesweeper</h4>

				</single-project>

			</b-row>

		</b-container>

	</div>
</template>

<script>

import SingleProject from './homepage/singleProject.vue';

export default {
	name: 'homepage',

	components: {
		SingleProject
	},

	props: {

		featuredImage: {
			type: String
		}

	},

	computed: {

		mainBackgroundImage() {
			return `background-image: url(${this.featuredImage})`;
		}
	}

}
</script>

<style lang="scss" scoped>

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

</style>
