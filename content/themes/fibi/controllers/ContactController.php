<?php

use FIBI\Theme\AbstractController;

namespace FIBI\Theme;

/**
 * Contact Controller
 */
final class ContactController extends AbstractController
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
		return ['pages/contact/contact.twig'];
	}
}
