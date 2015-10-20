<?php

use FIBI\Theme\NewsletterController;

namespace FIBI\Theme;

/**
 * About Controller,
 */
final class NewsletterController extends AbstractController
{
	public function getContext()
	{
        return [
        	'title' => get_the_title()
    	];
	}

	public function getTemplates()
	{
		return ['pages/newsletter/newsletter.twig'];
	}
}
