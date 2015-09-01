<?php
use FIBI\Theme\AbstractController;

namespace FIBI\Theme;

/**
 * Index.
 */
final class IndexController extends AbstractController
{
	public function getContext()
	{
        return ['posts' => $this->getPosts()];
	}

	public function getTemplates()
	{
		return ['pages/index/index.twig'];
	}
}
