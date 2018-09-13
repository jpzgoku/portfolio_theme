<?php

add_action('rest_api_init', 'wheresWaldoHighScoresRoutes');

function wheresWaldoHighScoresRoutes() {

	register_rest_route('wheres-waldo/v1', 'high-score', [
		'methods' => WP_REST_SERVER::READABLE,
		'callback' => 'highScoresData'
	]);

	register_rest_route('wheres-waldo/v1', 'high-score', [
		'methods' => 'POST',
		'callback' => 'createHighScore'
	]);
}

function highScoresData() {
	$mainQuery = new WP_Query([
		'post_type' => 'high_score'
	]);

	$results = [
		'town' => [],
		'vikingFeast' => [],
		'colosseum' => []
	];

	while ($mainQuery->have_posts()) {
		$mainQuery->the_post();

		array_push($results[get_field('level')], [
			'title' => get_the_title(),
			'seconds' => get_field('seconds'),
			'level' => get_field('level')
		]);
	}

	function orderBy($data, $field) {
		$code = "return strnatcmp(\$a['$field'], \$b['$field']);";
		usort($data, create_function('$a, $b', $code));
		return $data;
	}

	foreach($results as $key => $value) {
		$results[$key] = orderBy($results[$key], 'seconds');
	}

	return $results;
}

function createHighScore($data) {
	wp_insert_post([
		'post_type' => 'high_score',
		'post_status' => 'publish',
		'post_title' => sanitize_text_field($data['title']),
		'meta_input' => [
			'seconds' => sanitize_text_field($data['seconds']),
			'level' => sanitize_text_field($data['level'])
		]
	]);
}
