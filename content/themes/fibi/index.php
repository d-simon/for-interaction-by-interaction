<?php

use FIBI\Theme\HomeController;
use FIBI\Theme\IndexController;

if (is_home()) {
	(new HomeController())->render();
} else {
	(new IndexController())->render();
}
