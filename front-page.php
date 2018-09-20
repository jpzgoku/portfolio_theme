<body>

<?php get_header(); ?>

<div id="app">
	<custom-nav-bar site-url="<?= site_url(); ?>"></custom-nav-bar>
	
</div>

<?= the_content(); ?>

<?php get_footer(); ?>
