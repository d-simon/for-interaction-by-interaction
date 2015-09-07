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

		$future_post = $this->getPostForArgs([
			'post_type' 		=> 'event',
			'post_status'		=> ['future'],
			'orderby'			=> 'date',
			'oder'				=> 'ASC'
		]);

        return [
        	'title' => get_the_title(),
        	'post' => $this->getPost(),
        	// 'link_contact' => '#', // without about page template, we can't get this automatically
        	'future_post' => $future_post
    	];
	}

	public function getTemplates()
	{
		return ['pages/about/about.twig'];
	}
}
