<?php get_header();

while (have_posts()) {
    the_post();
?>

<div id="app">
	<portfolio-nav-bar site-url="<?= site_url(); ?>"></portfolio-nav-bar>

</div>

<?= the_content(); ?>

<?php }

get_footer();

?>
