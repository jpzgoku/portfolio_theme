<body>

<?php get_header(); ?>

<div id="app">
	<custom-nav-bar site-url="<?= site_url(); ?>"></custom-nav-bar>
	<homepage
		featured-image="<?php the_post_thumbnail_url('homepageBackground'); ?>"
		>
	</homepage>
</div>

<?= the_content(); ?>

<?php get_footer(); ?>
