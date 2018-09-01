<body style="background-color: black;">

<?php get_header(); ?>

<div id="app">
	<custom-nav-bar
		site-url="<?= site_url(); ?>">
	</custom-nav-bar>

	<dragon-ball-battleship
		site-url="<?= site_url(); ?>">
	</dragon-ball-battleship>
</div>

<?php get_footer(); ?>
