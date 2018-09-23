<?php get_header();

while (have_posts()) {
    the_post();
?>

<div id="app">

	<portfolio-nav-bar
		site-url="<?= site_url(); ?>">
	</portfolio-nav-bar>

	<resume
		download-link="<?= wp_get_attachment_url(get_field('attachment_id')); ?>">
	</resume>

	<portfolio-footer
		site-url="<?= site_url(); ?>">
	</portfolio-footer>
</div>

<?php }

get_footer();

?>
