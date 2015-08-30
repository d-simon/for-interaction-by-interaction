<?php

use FIBI\Theme\AbstractController;

/**
 * Index.
 */
final class Index extends AbstractController
{
	public function getContext()
	{
		return [
			'events' => Timber::get_posts(array(
				'post_type' 		=> 'event',
				'posts_per_page' 	=> -1
			))
		];
	}

	public function getTemplates()
	{
		if (is_home()) {
		    return ['pages/home/home.twig'];
		}

		return ['pages/index/index.twig'];
	}
}

(new Index())->render();
