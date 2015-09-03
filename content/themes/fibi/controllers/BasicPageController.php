<?php

use FIBI\Theme\AbstractController;

namespace FIBI\Theme;

/**
 * Basic Page Controller
 */
final class BasicPageController extends AbstractController
{
	public function getContext()
	{
        return [
        	'title' => get_the_title(),
        	'post' => $this->getPost()
    	];
	}

	public function getTemplates()
	{
		return ['pages/page/page.twig'];
	}
}
