<?php
	function register_main_menu() {
	  register_nav_menu('main-menu', __('Main Menu'));
	}
	add_action('init', 'register_main_menu');
