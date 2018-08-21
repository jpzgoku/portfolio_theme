<?php

function load_js_scripts() {
    // wp_enqueue_media("logo", get_theme_file_uri('/dist/logo.png'), NULL, "1.0", true);
    wp_enqueue_script("buildjs", get_theme_file_uri('/dist/build.js'), NULL, "1.0", true);
};

add_action("wp_enqueue_scripts", "load_js_scripts");
