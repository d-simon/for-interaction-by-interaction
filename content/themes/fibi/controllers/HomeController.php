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

		return [
			'post_current' => $post_current,
			'posts_archive' => $posts_archive
		];
	}

	public function getTemplates()
	{
		return ['pages/home/home.twig'];
	}
}
