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
        return [
        	'title' => get_the_title(),
        	'post' => $this->getPost()
    	];
	}

	public function getTemplates()
	{
		return ['pages/event/event.twig'];
	}
}
