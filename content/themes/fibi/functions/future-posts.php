<?php

// Fix Permalink for future Posts
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

// Show Single Future Posts
// http://www.telegraphicsinc.com/2013/01/show-future-posts-in-wordpress-without-a-plugin/
add_filter('the_posts', 'show_future_posts');
function show_future_posts($posts){
	global $wp_query, $wpdb;
	if (is_single() && $wp_query->post_count == 0) {
		$new_posts = $wpdb->get_results($wp_query->request);
		$posts = array_filter($new_posts, "_theme_filter_futureposts");
	}
	return $posts;
}

function _theme_filter_futureposts($post) {
	return $post->post_status == 'future';
}
