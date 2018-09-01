<body>

<?php get_header(); ?>

<div id="app">
	<custom-nav-bar
		:fixed-nav-bar="true"
		site-url="<?= site_url(); ?>">
	</custom-nav-bar>

	<wheres-waldo></wheres-waldo>
</div>

<?php get_footer(); ?>
