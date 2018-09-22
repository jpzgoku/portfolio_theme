<template lang="html">
	<b-container class="my-5">

		<h1 class="text-center pt-5 pb-4">Work Experience</h1>

		<previous-job
			company="OpticsPlanet"
			jobTitle="Junior Marketing Specialist"
			dates="March 2018 – July 2018"
			workPlaceImg="/wp-content/themes/portfolio/src/assets/resume/opticsplanet.png">

			<ul>
				<li>
					 Planned and implemented email marketing campaigns
				</li>
				<li>
					Analyzed PPC campaigns
				</li>
				<li>
					Wrote ad copy
				</li>
			</ul>

		</previous-job>

		<hr>

		<previous-job
			company="Vicare Corp."
			jobTitle="Front-end Web Developer"
			dates="April 2017 - Nov 2017"
			workPlaceImg="/wp-content/themes/portfolio/src/assets/resume/vicare.png">

			<ul>
				<li>
					 One of the lead developers on the vicare.vn website. Developed and maintained both vanilla Javascript and Vue.js components, including the corresponding HTML5 and SASS files. Implemented the Vuex State Management System. Implemented Google Analytics tracking into the various components including the tawkto.io widget. Received bug reports and implemented fixes.
				</li>
				<li>
					Technologies used: Django, Vue.js, jQuery, SASS and Bootstrap.
				</li>
				<li>
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

		<a :href="downloadLink" download target="_blank">Download Resume</a>
	</b-container>

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

</style>
