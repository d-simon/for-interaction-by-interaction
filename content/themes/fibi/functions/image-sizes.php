<?php

add_image_size('full', 1120, 650, array('center', 'center'));
add_image_size('gallery', 800, 500, array('center', 'center'));
add_image_size('single', 645, 430, array('center', 'center'));


/**
 * Enable Theme Support for "Feature Image"
 */
add_theme_support('post-thumbnails', array('event'));
