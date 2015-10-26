<?php

if (is_admin()) return;

/**
 * Setup Timber Context (e.g. Menus)
 */
add_filter('timber_context', '_theme_setup_twig_context');
function _theme_setup_twig_context($data) {

	$data['mainnav'] = new TimberMenu('mainnav');

	return $data;
}

/**
 * Add some data to global Twig context
 *
 * Directly accessible in every template (e.g. {{ globals.home_url }})
 */
add_filter('get_twig', '_theme_add_twig_globals');
function _theme_add_twig_globals($twig) {

	$default_data = _theme_get_json_data('data/default.json');
	if (isset($default_data['globals']) == false) {
		$default_data['globals'] = array();
	}

	$title = get_the_title() . ' - ' . get_field('project_title', 'option');
	if (is_home() || is_front_page()) {
		$title = get_field('project_title', 'option');
	}

	$default_data['globals'] = array_merge($default_data['globals'], array(
			'page_title' => $title,
			'theme_root' => get_template_directory_uri(),
			'home_url' => get_home_url(),
			'footer_url' => get_field('footer_link', 'option'),
			'project' => array(
				'title' => get_field('project_title', 'option'),
				'lead' => get_field('project_lead', 'option')
			),
			'google_analytics_id' => get_field('google_analytics_id', 'option'),
			// Load unminified (true) or minified (false) assets
			'env' => array(
				'dev' => false // consider setting this to WP_DEBUG
			),
			// Use correct templates
			'gulp' => false
	));

	$twig->addGlobal('globals', $default_data['globals']);

	return $twig;
}

/**
 * Get context data which is used everywhere
 *
 * Conditionally load JSON data files from gulp env
 */

function _theme_get_json_data($relative_path) {
	$data = array();

	if ($file = file_get_contents(TEMPLATEPATH . '/data/' . $relative_path)) {
		$data = json_decode($file, true);
	}

	return $data;
}


