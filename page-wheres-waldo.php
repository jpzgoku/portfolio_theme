<body>

<?php get_header(); ?>

<div id="app">
	<portfolio-nav-bar
		:fixed-nav-bar="true"
		site-url="<?= site_url(); ?>">
	</portfolio-nav-bar>

	<wheres-waldo
		site-url="<?= site_url(); ?>">
	</wheres-waldo>
</div>

<?php get_footer(); ?>
