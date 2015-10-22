<?php

use FIBI\Theme\AbstractController;

namespace FIBI\Theme;

/**
 * Event Archive Controller
 */
final class EventArchiveController extends AbstractController
{
	public function getContext()
	{

		// Get published events (minus $post_current)
		$posts_archive = $this->getPostsForArgs([
			'post_type' 		=> 'event',
			'posts_per_page' 	=> -1
		]);

		// Find "Current" Page and link to it
		$pages = get_pages([
			'meta_key' => '_wp_page_template',
			'meta_value' => 'page-current.php'
		]);
		$link_current = (count($pages) > 0) ? get_permalink($pages[0]->ID) : home_url();


		return [
			'posts' => $posts_archive,
			'link_current' => $link_current
		];
	}

	public function getTemplates()
	{
		return ['pages/archive/archive.twig'];
	}
}
