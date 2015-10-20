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

		// Find the Current Page and link to it
		$pages = get_pages([
			'meta_key' => '_wp_page_template',
			'meta_value' => 'page-current.php'
		]);
		$link_current = (count($pages) > 0) ? get_permalink($pages[0]->ID) : false;


        return [
        	'title' => get_the_title(),
        	'post' => $this->getPost(),
        	'link_current' => $link_current,
        	'future_post' => $future_post
    	];
	}

	public function getTemplates()
	{
		return ['pages/about/about.twig'];
	}
}
