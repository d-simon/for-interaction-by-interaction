<?php

namespace FIBI\Theme;

use Timber;
use TimberLoader;
	use LogicException;
use RuntimeException;

/**
 * AbstractController.
 */
abstract class AbstractController
{
    /**
     *  Render template
     *
     * @return boolean|string|null
     */
    public function render()
    {
        $context = $this->getContext();

        $this->validateTemplates($this->getTemplates());
        $this->validateContext($context);

        Timber::render(
            $this->getTemplates(),
            array_merge(Timber::get_context(), $context)
        );
    }

    /**
     * Check if context is a array
     *
     * @param array|null $context
     */
    protected function validateContext($context)
    {
        if (!is_array($context)) {
            throw new LogicException('::getContext should return a array');
        }
    }

    /**
     * Check if getTemplates is a array and template file exist
     *
     * @param string[] $templates
     */
    protected function validateTemplates($templates)
    {
        if (!is_array($templates)) {
            throw new LogicException('::getTemplates should return a array');
        }

        foreach ($templates as $template) {
            if (!is_file(get_template_directory().'/views/'.$template) && !is_file(get_template_directory().'/views/'.end($templates))) {
                throw new LogicException(sprintf('Template [%s] dont exists.', $template));
            }
        }
    }
}
