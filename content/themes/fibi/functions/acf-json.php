<?php

	add_filter('acf/settings/save_json', 'acf_json_save_point');

	function acf_json_save_point( $path ) {

		// update path
		$path = __DIR__ . '/../acf-json';


		// return
		return $path;

	}


	add_filter('acf/settings/load_json', 'acf_json_load_point');

	function acf_json_load_point( $paths ) {

		// remove original path (optional)
		unset($paths[0]);


		// append path
		$paths[] = __DIR__ . '/../acf-json';

		// return
		return $paths;

	}
