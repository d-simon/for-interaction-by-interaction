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

		return [
			'posts' => $posts_archive,
			'link_current' => home_url()
		];
	}

	public function getTemplates()
	{
		return ['pages/archive/archive.twig'];
	}
}
