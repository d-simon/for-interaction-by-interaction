<?php

use FIBI\Theme\HomeController;
use FIBI\Theme\IndexController;

if (is_home() || is_front_page()) {
	(new HomeController())->render();
} else {
	(new IndexController())->render();
}
