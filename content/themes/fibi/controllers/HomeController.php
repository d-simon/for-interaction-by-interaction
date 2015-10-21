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
		$posts_current = $this->getPostsForArgs([
			'post_type' 		=> 'event',
			'post_status'		=> ['future'],
			'orderby'			=> 'date',
			'oder'				=> 'DESC'
		]);

		// Otherwise get newest post
		if (!$posts_current) {
			$posts_current = [
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

		// Find Archive Page and link to it
		$pages = get_pages([
			'meta_key' => '_wp_page_template',
			'meta_value' => 'archive-event.php'
		]);
		$link_archive = (count($pages) > 0) ? get_permalink($pages[0]->ID) : false;

		return [
			'posts_current' => $posts_current,
			'image_panorama' => get_field('home_panorama_image', 'options'),
			'link_archive' => $link_archive,
			'link_about' => $link_about
		];
	}

	public function getTemplates()
	{
		return ['pages/home/home.twig'];
	}
}
