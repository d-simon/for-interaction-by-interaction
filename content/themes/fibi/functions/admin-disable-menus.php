<?php
/**
 * Hide options from the admin menu
 */
add_action( 'admin_menu', 'wpse150828_hide_pages_comments_m' );
function wpse150828_hide_pages_comments_m() {
    remove_menu_page('edit.php');					// posts
    remove_menu_page('edit-comments.php'); 			// comments
}
