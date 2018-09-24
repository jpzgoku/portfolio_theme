<template lang="html">
	<div>

		<div class="text-center header" :style="mainBackgroundImage">

			<b-img class="professional" src="/wp-content/themes/portfolio/src/assets/homepage/professionaljpz.jpg" fluid/>

			<h1 class="pt-5 pb-4">
				John Zarek
			</h1>
			<h4>Front End / Wordpress Developer</h4>

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

		<hr>

		<b-container>
			<h2 class="mt-5 pt-5 text-center">My Work</h2>

			<b-row>

				<single-project
					projectImage="/wp-content/themes/portfolio/src/assets/homepage/williamzarek.png">

					<h4><a href="http://www.williamzarek.com/" target="_blank">WilliamZarek.com</a></h4>

					<p>
						This is the personal website of 3D animator William Zarek. It showcases his bio, portfolio, and contact information. There's also a contact form where clients can send their contact information.
					</p>

				</single-project>

				<single-project
					projectImage="/wp-content/themes/portfolio/src/assets/homepage/zarekprivateteaching.png">

					<h4><a href="http://zarekprivateteaching.com/en/" target="_blank">ZarekPrivateTeaching.com</a></h4>

					<p>
						A Digital Marketing project. I taught private English lessons to students in Vietnam. This is the Wordpress website that I used to acquired students, along with a Google Ads campaign and a Convert Kit email marketing campaign. I also used Google Analytics to study visitor behavior to make adjustments to my website's design and to optimize my Google Ad campaign's ROI.
					</p>

				</single-project>

			</b-row>

		</b-container>

		<hr>

		<b-container>
			<h2 class="mt-5 pt-5 text-center">My Projects</h2>

			<b-row>

				<single-project
					projectImage="/wp-content/themes/portfolio/src/assets/homepage/dragon-ball-battleship.png">

					<h4><a :href="`${this.siteUrl}/dragon-ball-battleship`" target="_blank">Dragon Ball Battleship</a></h4>

					<p>
						A classic Dragon Ball themed Battleship game that I made for fun.
					</p>

					<p>
						Technologies used: Vue.js, Vuex, Bootstrap Vue
					</p>

				</single-project>

				<single-project
					projectImage="/wp-content/themes/portfolio/src/assets/homepage/wheres-waldo.png">

					<h4><a :href="`${this.siteUrl}/wheres-waldo`" target="_blank">Where's Waldo</a></h4>

					<p>
						A desktop version of Where's Waldo that I made as part of <a href="https://www.theodinproject.com" target="_blank">theOdinProject</a> cirriculum.
					</p>

					<p>
						Technologies used: Vue.js, Vuex, Bootstrap Vue, Wordpress REST API
					</p>

				</single-project>

				<single-project
					projectImage="/wp-content/themes/portfolio/src/assets/homepage/minesweeper.png">

					<h4><a :href="`${this.siteUrl}/minesweeper`" target="_blank">Minesweeper</a></h4>

					<p>
						Classic Minesweeper game that I made as part of <a href="https://www.theodinproject.com" target="_blank">theOdinProject</a> cirriculum.
					</p>

					<p>
						Technologies used: Vue.js, Vuex, Bootstrap Vue
					</p>

				</single-project>

			</b-row>

		</b-container>

		<hr>

		<b-container class="text-center my-5">

			<h2 class="p-4">Contact Me!</h2>

			<b-row>
				<b-col sm="4" class="py-3">
					GitHub
					<div class="mt-2">
						<a href="https://github.com/jpzgoku" target="_blank">/jpzgoku</a>
					</div>
				</b-col>
				<b-col sm="4" class="py-3">
					E-mail
					<div class="mt-2">
						<a href="mailto:johnzarek04@gmail.com">johnzarek04@gmail.com</a>
					</div>
				</b-col>
				<b-col sm="4" class="py-3">
					LinkedIn
					<div class="mt-2">
						<a href="https://www.linkedin.com/in/john-zarek-022a48155/" target="_blank">John Zarek</a>
					</div>
				</b-col>
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

		siteUrl: {
			type: String
		},

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
	background-repeat: no-repeat;
	min-height: 100vh;
	padding: 80px 0;
}

img.professional {
	border: 2px solid #23313A;
	border-radius: 50%;
	max-height: 350px;
}

.about-me-img {
	text-align: center;

	img {
		height: 450px;
	}
}

</style>
