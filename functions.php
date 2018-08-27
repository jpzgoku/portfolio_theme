<?php

function load_js_scripts() {
    // wp_enqueue_media("logo", get_theme_file_uri('/dist/logo.png'), NULL, "1.0", true);
	// wp_enqueue_media(['wp-content/themes/my-project/dist/waldo1.png']);
	// wp_enqueue_media(['wp-content/themes/my-project/dist/waldo2.png']);
	// wp_enqueue_media(['wp-content/themes/my-project/dist/waldo3.png']);

    // Use microtime() to make it so that you don't have to clear browser caches each reload.
    // Change this setting before production (I think).
    wp_enqueue_script("buildjs", get_theme_file_uri('/dist/build.js'), NULL, microtime(), true);
    wp_enqueue_style("stylecss", get_stylesheet_uri(), NULL, microtime());
};

add_action("wp_enqueue_scripts", "load_js_scripts");
