<?php

if (is_admin()) return;

/**
 * Add functions to Twig
 *
 * Directly accessible in every template (e.g. {{ myFunction(globals.home_url) }})
 */

add_filter('get_twig', '_theme_add_twig_functions');

function _theme_add_twig_functions($twig) {

	/**
	 * This function is simply a proxy for get_field which enables us
	 * to use the same template in the frontend and backend by
	 * implementing the same function in Twig.js.
	 *
	 * NOTE: This generates an additional object lookup, which
	 *		 hits the object cache. Hence, no performance overhead.
	 */
    $twig->addFunction('getFieldOfPost', new Twig_SimpleFunction('getFieldOfPost', function ($post, $fieldname) {
    	return ($post) ? get_field($fieldname, $post->ID) : null;
    }));

    $twig->addFilter('getImageSize', new Twig_SimpleFilter('getImageSize', '_theme_get_image_size'));

    return $twig;
}
