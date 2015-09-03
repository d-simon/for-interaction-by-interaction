<?php

use FIBI\Theme\AbstractController;

namespace FIBI\Theme;

/**
 * Home.
 */
final class HomeController extends AbstractController
{
	public function getContext()
	{

		// Get published events (minus $post_current)
		$post_current = $this->getPostForArgs([
			'post_type' 		=> 'event',
			'post_status'		=> ['future'],
			'orderby'			=> 'date',
			'oder'				=> 'ASC'
		]);

		// Otherwise get newest post
		if (!$post_current) {
			$post_current = $this->getPostForArgs([
				'post_type' 		=> 'event'
			]);
		}

		// Get published events (minus $post_current)
		$posts_archive = $this->getPostsForArgs([
			'post_type' 		=> 'event',
			'posts_per_page' 	=> 3,
			'post__not_in'		=> ($post_current) ? [$post_current->ID] : []
		]);

		// Find Archive Page
		$pages = get_pages([
			'meta_key' => '_wp_page_template',
			'meta_value' => 'archive-event.php'
		]);
		$link_archive = (count($pages) > 0) ? get_permalink($pages[0]->ID) : false;

		return [
			'post_current' => $post_current,
			'posts_archive' => $posts_archive,
			'image_panorama' => get_field('home_panorama_image', 'options'),
			'link_archive' => $link_archive
		];
	}

	public function getTemplates()
	{
		return ['pages/home/home.twig'];
	}
}
