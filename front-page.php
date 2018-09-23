<body>

<?php get_header(); ?>

<div id="app">

	<portfolio-nav-bar
		site-url="<?= site_url(); ?>">
	</portfolio-nav-bar>

	<homepage
		site-url="<?= site_url(); ?>"
		featured-image="<?php the_post_thumbnail_url('homepageBackground'); ?>">
	</homepage>

	<portfolio-footer
		site-url="<?= site_url(); ?>">
	</portfolio-footer>
</div>

<?php get_footer(); ?>
