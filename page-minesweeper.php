<body>

<?php get_header(); ?>

<div id="app">
	<custom-nav-bar
		site-url="<?= site_url(); ?>">
	</custom-nav-bar>

	<minesweeper></minesweeper>
</div>

<?php get_footer(); ?>