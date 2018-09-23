<template lang="html">
	<div class="my-5">

		<h1 class="text-center pt-5 pb-1">Work Experience</h1>

		<div class="text-center pb-3">
			<font-awesome-icon icon="ellipsis-h" size="2x" :style="{ color: '#343a40' }" />
		</div>

		<previous-job
			company="Zarek Private Teaching"
			websiteURL="http://zarekprivateteaching.com/en/"
			websiteName="ZarekPrivateTeaching.com"
			jobTitle="Internet Marketer"
			dates="July 2018 – September 2018"
			workPlaceImg="/wp-content/themes/portfolio/src/assets/homepage/zarekprivateteaching.png">

			<ul>
				<li>
					A Digital Marketing project. I Taught private English lessons to students in Vietnam.
				</li>
				<li>
					Acquired stuents through my Wordpress site, Google Ads camaign, and Convert Kit email marketing campaign.
				</li>
				<li>
					Used Google Analytics to study visitor behavior to make adjustments to my website's design and to optimize my Google Ad campaign's ROI.
				</li>
			</ul>

		</previous-job>

		<hr>

		<previous-job
			company="OpticsPlanet"
			websiteURL="https://www.opticsplanet.com/"
			websiteName="OpticsPlanet.com"
			jobTitle="Junior Marketing Specialist"
			dates="March 2018 – July 2018"
			workPlaceImg="/wp-content/themes/portfolio/src/assets/resume/opticsplanet.png">

			<ul>
				<li>
					Planned and implemented email marketing campaigns. Collaborated with other marketers and designers to optimize the reach and ROI.
				</li>
				<li>
					Analyzed PPC campaigns. Made detailed reports about the data in such campaigns and used this data to make suggestions on how to optimize our keyword bidding strategies for maximum revenue growth.
				</li>
				<li>
					Wrote ad copy for both daily emails and on-site promotions.
				</li>
				<li>
					Used Google Analytics and PPC data to write detailed reports about our customer acquistion efforts.
				</li>
			</ul>

		</previous-job>

		<hr>

		<previous-job
			company="Vicare Corp."
			websiteURL="https://vicare.vn/"
			websiteName="Vicare.vn"
			jobTitle="Front-end Web Developer"
			dates="April 2017 - Nov 2017"
			workPlaceImg="/wp-content/themes/portfolio/src/assets/resume/vicare.png">

			<ul>
				<li class="p-0">
					 One of the lead developers on the vicare.vn website. Developed and maintained both vanilla Javascript and Vue.js components, including the corresponding HTML5 and SASS files. Implemented the Vuex State Management System. Implemented Google Analytics tracking into the various components including the tawkto.io widget. Received bug reports and implemented fixes.
				</li>
				<li>
					Technologies used: Django, Vue.js, jQuery, SASS and Bootstrap.
				</li>
				<li class="p-0">
					Lead developer on xetnghiemtainha.vn. Implemented Google Analytics. Made new forms with vanilla Javascript. Maintained the CSS files and made styling updates. Received bug reports and implemented fixes.
				</li>
				<li>
					Technologies Used: Joomla CMS, vanilla Javascript, jQuery.
				</li>
				<li>
					Collaborated with other developers, designers, QA Testers, Marketers, and Sales people using the Agile development methodology. Collaborated and communicated with each other using GIT, Gitlab, Trello, and Slack.
				</li>
			</ul>

		</previous-job>

		<hr>

		<previous-job
			company="Zarek Digital Marketing"
			jobTitle="Digital Strategist"
			dates="Nov 2017 – March 2018"
			workPlaceImg="/wp-content/themes/portfolio/src/assets/resume/zarek-digital-marketing-logo.png">

			<ul>
				<li>
					 Built SEO optimized Wordpress sites - did competitive keyword research to determine rankability, found long tail keywords and new opportunities. Optimized meta tags, created SEO optimized content.
				</li>
				<li>
					Created, managed, and optimized Google Ads accounts - reduced CPC, implemented proper account structure, and increased relevant traffic through keyword research and negative keywords, conducted A/B split testing.
				</li>
				<li>
					Used Google Analytics to access visitor behavior and make adjustments to paid campaigns and organic search strategies.
				</li>
			</ul>

		</previous-job>

		<b-container>
			<a :href="downloadLink" download target="_blank">Download Resume</a>
		</b-container>

	</div>

</template>

<script>

import PreviousJob from './resume/previousJob.vue';

export default {
	name: 'resume',

	components: {
		PreviousJob
	},

	props: {

		downloadLink: {
			type: String
		}

	}

}

</script>

<style lang="scss">

li {
	padding: 0 0 16px 0;
}

</style>
