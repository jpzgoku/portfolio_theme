<template lang="html">
	<div class="py-4">
		<ul class="text-center list-inline">
			<li class="p-1">
				<font-awesome-icon icon="copyright" size="sm"/> 2018 John Zarek
			</li>
			<li class="icons px-2">
				<a href="https://github.com/jpzgoku" target="_blank">
					<font-awesome-icon :icon="['fab', 'github']" size="2x"/>
				</a>
			</li>
			<li class="icons px-2">
				<a href="https://www.linkedin.com/in/john-zarek-022a48155/" target="_blank">
					<font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'portfolio-footer',

	props: {

		siteUrl: {
			type: String
		}
	}

}
</script>

<style lang="scss" scoped>

div {
	background: #343a40;
	color: #999c9f;
}

ul {
	line-height: 34px;
	margin: 0 auto;

	li.icons {
		display: inline-block;
	}
}

a {
	color: #999c9f;

	&:hover {
		color: #cccdcf;
	}
}

</style>
