<?php

add_action('init', '_theme_register_menus');
function _theme_register_menus() {
	register_nav_menus(array(
		'mainnav' => __('Main Navigation')
	));
}
