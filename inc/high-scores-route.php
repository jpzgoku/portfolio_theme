<?php

add_action('rest_api_init', 'wheresWaldoHighScoresRoutes');

function wheresWaldoHighScoresRoutes() {

	register_rest_route('wheres-waldo/v1', 'high-scores', [
		'methods' => 'POST',
		'callback' => 'createHighScore'
	]);
}

function createHighScore($data) {
	wp_insert_post([
		'post_type' => 'high_score',
		'post_status' => 'publish',
		'post_title' => sanitize_text_field($data['name']),
		'meta_input' => [
			'level' => sanitize_text_field($data['level']),
			'seconds' => sanitize_text_field($data['seconds'])
		]
	]);
}
