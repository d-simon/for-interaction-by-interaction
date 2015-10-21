<?php

use FIBI\Theme\AbstractController;

namespace FIBI\Theme;

/**
 * Event Single Controller
 */
final class EventSingleController extends AbstractController
{
	public function getContext()
	{

		$post = $this->getPost();

		$post_newest = $this->getPostForArgs([
			'post_type' => 'event',
			'post_status' => ['publish','future']
		]);

		$is_current = false;
		if ($post->status == 'future' || $post_newest->ID == $post->ID) {
			$is_current = true;
		}

        return [
        	'title' => get_the_title(),
        	'is_current' => $is_current,
        	'post' => $this->getPost()
    	];
	}

	public function getTemplates()
	{
		return ['pages/event/event.twig'];
	}
}
