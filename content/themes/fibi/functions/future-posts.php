<?php

// https://wordpress.org/support/topic/urls-incorrect-for-scheduled-posts?replies=24#post-6982794

// post, page post type
add_filter( 'post_link', 'future_permalink', 10, 3 );
// custom post types
add_filter( 'post_type_link', 'future_permalink', 10, 4 );

function future_permalink( $permalink, $post, $leavename, $sample = false ) {
	/* for filter recursion (infinite loop) */
	static $recursing = false;

	if ( empty( $post->ID ) ) {
		return $permalink;
	}

	if ( !$recursing ) {
		if ( isset( $post->post_status ) && ( 'future' === $post->post_status ) ) {
			// set the post status to publish to get the 'publish' permalink
			$post->post_status = 'publish';
			$recursing = true;
			return get_permalink( $post, $leavename ) ;
		}
	}

	$recursing = false;
	return $permalink;
}
