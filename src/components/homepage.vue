<template lang="html">
	<div>

		<div class="text-center header" :style="mainBackgroundImage">

			<b-img class="professional" src="/wp-content/themes/portfolio/src/assets/homepage/professionaljpz.jpg" fluid/>

			<h1 class="pt-5 pb-4">
				John Zarek
			</h1>
			<h4>Front End &amp; Wordpress Developer / Digital Marketer</h4>

		</div>

		<b-container>
			<h2 class="mt-5 pt-5 text-center">About Me</h2>
			<b-row>

				<b-col md="6" lg="5" class="mt-5 about-me-img">
					<b-img src="/wp-content/themes/portfolio/src/assets/homepage/about-me.jpg" fluid/>
				</b-col>

				<b-col md="6" lg="7">
					<div class="mt-5 mb-4">
						I'm a web developer and online business enthusiast. I've been running my own online businesses ever since getting my first development position at an online based startup - where I first learned all about things like Google Analytics, SEO, content writing and more.
					</div>

					<div class="mb-3">
						Some of my projects include:
					</div>

					<div class="mb-3">
						<a href="http://firstwebdevelopmentjob.com/" target="_blank">Your First Web Development Job</a> - A blog that I created to try out Wordpress, content writing, SEO optimization, Google Ads, Bing Ads, and affilliate marketing.
					</div>

					<div class="mb-3">
						Zarek Digital Marketing (website now defunct) - A one-man digital markeing business where I ran paid search campaigns for other small businesses and helped them SEO optimize their websites.
					</div>

					<div class="mb-4">
						<a href="http://zarekprivateteaching.com/en/" target="_blank">Zarek Private Teaching</a> - A short term private teaching business. The purpose of this project was to further practice and learn about customer acquisition, Google Ads, Wordpress development, Google Analytics, and Convert Kit email marketing campaigns.
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
