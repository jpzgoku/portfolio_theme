<template lang="html">
  	<b-container>
  		<h1>This is the Resume Page</h1>

		<b-row>
			<b-col class="my-3 text-center-medium">
				<h3>Vicare Corp.</h3>
			</b-col>
		</b-row>
		<b-row>
			<b-col class="my-3 text-center-medium" md="6">
				<h4>Front-end Web Developer</h4>
			</b-col>
			<b-col class="my-3 text-right-not-medium" md="6">
				<h4>April 2017 - Nov 2017</h4>
			</b-col>
		</b-row>
		<b-row>
			<b-col class="my-3 text-center-medium" md="4">
				<b-img src="/wp-content/themes/portfolio/src/assets/resume/vicare.png" fluid/>
			</b-col>
			<b-col class="my-3" md="8">
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
			</b-col>
		</b-row>

		<a :href="downloadLink" download target="_blank">Download Resume</a>
  	</b-container>
</template>

<script>

export default {
	name: 'resume',

	props: {

		downloadLink: {
			type: String
		}

	}

}

</script>

<style lang="scss">

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
