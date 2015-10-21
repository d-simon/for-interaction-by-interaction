<?php

/**
 * Define ImageSizes which we can use for Wordpress
 * and Timber (custom TwigFIlter getImageSize)
 * TODO: Clean up that global mess
 */
global $themeImageSizes;
$themeImageSizes  = array(
	'panorama' => array(
		'width' => 1440,
		'height' => 480,
		'wp_crop' => array('center', 'center'),
		'timber_crop' =>  'default'
	),
	'full' => array(
		'width' => 1120,
		'height' => 700,
		'wp_crop' => array('center', 'center'),
		'timber_crop' =>  'default'
	),
	'gallery' => array(
		'width' => 800,
		'height' => 500,
		'wp_crop' => array('center', 'center'),
		'timber_crop' =>  'default',
		'timber_letterbox' => true
	),
	'event-archive' => array(
		'width' => 670,
		'height' => 441,
		'wp_crop' => array('center', 'center'),
		'timber_crop' =>  'default'
	),
);

$themeImageSizes['event-current'] = $themeImageSizes['full'];


/**
 * Resize Image with TimberImageHelper to predefined sizes
 * TODO: Move this into a class
 * TODO: Set quality
 */
function _theme_get_image_size($image, $size) {

	global $themeImageSizes;
	$return_image = $image;

	if ($themeImageSizes[$size]) {
		$w = $themeImageSizes[$size]['width'];
		$h = $themeImageSizes[$size]['height'];
		$crop = $themeImageSizes[$size]['timber_crop'];
		if (isset($themeImageSizes[$size]['timber_letterbox'])) {
			$return_image = TimberImageHelper::letterbox($image, $w, $h);
		} else {
			$return_image = TimberImageHelper::resize($image, $w, $h, $crop);
		}
	}

	return $return_image;
}


/**
 * Add all image sizes to Wordpress
 */
foreach ($themeImageSizes as $size => $s) {
	add_image_size($size, $s['width'], $s['height'], $s['wp_crop']);
}

/**
 * Enable Theme Support for "Feature Image"
 */
add_theme_support('post-thumbnails', array('event'));

