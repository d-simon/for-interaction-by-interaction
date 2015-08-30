<?php

$context = Timber::get_context();
$context['events'] = Timber::get_posts(array(
	'post_type' 		=> 'event',
	'posts_per_page' 	=> -1
));
Timber::render('pages/start/start.twig', $context);
