<?php get_header();

while (have_posts()) {
    the_post();
?>

<div id="app">
	<custom-nav-bar site-url="<?= site_url(); ?>"></custom-nav-bar>
	<resume download-link="<?= wp_get_attachment_url(get_field('attachment_id')); ?>"></resume>
</div>

<?php }

get_footer();

?>
