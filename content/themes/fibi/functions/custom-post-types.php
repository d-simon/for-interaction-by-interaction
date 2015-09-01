<?php

add_action( 'init', 'create_post_type' );
function create_post_type() {
	register_post_type('event',
		array(
			'labels' => array(
				'name' => __( 'Events' ),
				'singular_name' => __( 'Event' )
			),
			'public' => true,
			'has_archive' => true,
			'menu_position' => 5,
			'menu_icon' => 'dashicons-calendar'
		)
	);
}
