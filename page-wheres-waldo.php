<body>

<?php get_header(); ?>

<div id="app">
	<custom-nav-bar
		:fixed-nav-bar="true"
		site-url="<?= site_url(); ?>">
	</custom-nav-bar>

	<wheres-waldo
		site-url="<?= site_url(); ?>"
		nonce="<?= wp_create_nonce('wp_rest'); ?>">
	</wheres-waldo>
</div>

<?php get_footer(); ?>
