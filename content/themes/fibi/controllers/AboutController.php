<?php

use FIBI\Theme\AbstractController;

namespace FIBI\Theme;

/**
 * About Controller,
 */
final class AboutController extends AbstractController
{
	public function getContext()
	{

		$future_posts = $this->getPostsForArgs([
			'post_type' 		=> 'event',
			'post_status'		=> ['future'],
			'orderby'			=> 'date',
			'oder'				=> 'DESC'
		]);

		$future_posts = array_reverse($future_posts);

		$future_post = count($future_posts) > 0 ? $future_posts[0] : false;


        return [
        	'title' => get_the_title(),
        	'post' => $this->getPost(),
        	'future_post' => $future_post
    	];
	}

	public function getTemplates()
	{
		return ['pages/about/about.twig'];
	}
}
