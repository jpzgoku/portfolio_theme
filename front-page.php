<body>

<?php get_header(); ?>

<div id="app">
	<custom-nav-bar
		site-url="<?= site_url(); ?>">
	</custom-nav-bar>
	<homepage
		site-url="<?= site_url(); ?>"
		featured-image="<?php the_post_thumbnail_url('homepageBackground'); ?>">
	</homepage>
</div>

<?php get_footer(); ?>
