<template lang="html">
	<div>

		<div class="text-center header" :style="mainBackgroundImage">

			<b-img class="professional" src="/wp-content/themes/portfolio/src/assets/homepage/professionaljpz.jpg" fluid/>

			<h1 class="pt-4">
				Front End &amp; Wordpress Developer / Digital Marketer
			</h1>

			<ul class="text-center list-inline pt-4">
				<li>
					<b-button size="sm" variant="secondary">Vue.js</b-button>
				</li>
				<li>
					<b-button size="sm" variant="secondary">JavaScript</b-button>
				</li>
				<li>
					<b-button size="sm" variant="secondary">PHP / Wordpress</b-button>
				</li>
				<li>
					<b-button size="sm" variant="secondary">CSS</b-button>
				</li>
				<li>
					<b-button size="sm" variant="secondary">HTML</b-button>
				</li>
				<li>
					<b-button size="sm" variant="secondary">Google Analytics</b-button>
				</li>
				<li>
					<b-button size="sm" variant="secondary">Google Ads</b-button>
				</li>
			</ul>

		</div>

		<b-container class="p-5">
			<h2 class="mt-5 text-center">About Me</h2>
			<b-row>

				<b-col md="6" lg="5" class="mt-5 about-me-img">
					<b-img src="/wp-content/themes/portfolio/src/assets/homepage/about-me.jpg" fluid/>
				</b-col>

				<b-col md="6" lg="7">
					<div class="mt-5 mb-4 ">
						I'm a web developer and online business enthusiast. I've been running my own online businesses ever since getting my first development position at an online based startup - where I first learned all about things like Google Analytics, SEO, content writing and more.
					</div>

					<div class="mb-3">
						Some of my online business projects include:
					</div>

					<div class="mb-3 pl-4">
						<a href="http://firstwebdevelopmentjob.com/" target="_blank">Your First Web Development Job</a> - A blog that I created to try out Wordpress, content writing, SEO optimization, Google Ads, Bing Ads, and affiliate marketing.
					</div>

					<div class="mb-3 pl-4">
						Zarek Digital Marketing (website now defunct) - A one-man digital marketing business where I ran paid search campaigns for other small businesses and helped them SEO optimize their websites.
					</div>

					<div class="mb-4 pl-4">
						<a href="http://zarekprivateteaching.com/en/" target="_blank">Zarek Private Teaching</a> - A short term private teaching business. The purpose of this project was to further practice and learn about customer acquisition, Google Ads, Wordpress development, Google Analytics, and Convert Kit email marketing campaigns.
					</div>

					<div>
						My goal is to continue to grow and master online business either by working with other small businesses who need help with their websites and marketing, or with a company that works with small businesses, or utilizes technologies that are perfect for small to medium sized businesses - mainly Wordpress.
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
			<h2 class="mt-5 pt-5 text-center">Web Development Projects</h2>

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
	padding: 55px 0;

	h1 {
		font-size: 1.5rem;
	}

	ul {
		margin: 0 auto;
		max-width: 500px;
	}

	li {
		display: inline-block;
		padding: 6px 2px;

		button {
			cursor: default;

			&:hover {
				background-color: #6c757d;
				cursor: default;
			}
		}
	}
}

img.professional {
	border: 2px solid #23313A;
	border-radius: 50%;
	max-height: 325px;
}

.about-me-img {
	text-align: center;

	img {
		max-height: 450px;
	}
}

</style>
