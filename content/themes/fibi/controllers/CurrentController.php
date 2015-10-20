<?php

use FIBI\Theme\AbstractController;

namespace FIBI\Theme;

/**
 * Current
 */
final class CurrentController extends AbstractController
{
	public function getContext()
	{

		// Get published events (minus $post_current)
		$posts = $this->getPostsForArgs([
			'post_type' 		=> 'event',
			'post_status'		=> ['future'],
			'orderby'			=> 'date',
			'oder'				=> 'ASC'
		]);

		// Otherwise get newest post
		if (!$posts) {
			$posts = [
				$this->getPostForArgs([
					'post_type' => 'event'
				])
			];
		}

		// Find About Page and link to it
		$pages = get_pages([
			'meta_key' => '_wp_page_template',
			'meta_value' => 'page-about.php'
		]);
		$link_about = (count($pages) > 0) ? get_permalink($pages[0]->ID) : false;

		return [
			'posts' => $posts,
			'link_about' => $link_about
		];
	}

	public function getTemplates()
	{
		return ['pages/current/current.twig'];
	}
}
