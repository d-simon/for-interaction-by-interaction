<?php

/**
 * Template Name: Event Archiv
 */

use FIBI\Theme\EventArchiveController;


// Find Archive Page and redirect to it
if (is_archive('event')) {
	$pages = get_pages([
		'meta_key' => '_wp_page_template',
		'meta_value' => 'archive-event.php'
	]);
	if (count($pages) > 0) {
		wp_redirect(get_permalink($pages[0]->ID), 301);
		exit;
	}
}

(new EventArchiveController())->render();
