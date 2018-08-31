<?php get_header(); ?>

<div id="app">
	<custom-nav-bar
		:fixed-nav-bar="true"
		site-url="<?= site_url(); ?>">
	</custom-nav-bar>

	<board></board>
</div>

<?php get_footer(); ?>
