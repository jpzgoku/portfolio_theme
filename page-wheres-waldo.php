<body>

<?php get_header(); ?>

<div id="app">
	<custom-nav-bar
		:fixed-nav-bar="true"
		site-url="<?= site_url(); ?>">
	</custom-nav-bar>

	<wheres-waldo
		site-url="<?= site_url(); ?>">
	</wheres-waldo>
</div>

<?php get_footer(); ?>
