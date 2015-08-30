<?php

	if( function_exists('acf_add_options_page') ) {
		acf_add_options_page(
			array(
			'page_title' 	=> 'Details',
			'menu_title'	=> 'Details',
			'menu_slug' 	=> 'site-settings',
			'icon_url'		=> 'dashicons-admin-generic',
			'redirect'		=> false,
			'position'		=> 5
			)
		);
	}
