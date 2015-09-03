![For Interaction By Interaction](https://rawgit.com/d-simon/for-interaction-by-interaction/master/theme/source/preview/assets/media/logo-module.svg "For Interaction By Interaction")

#For Interaction By Interaction — Meta Site

## Setup
### Installation

1. Install dependencies using [Composer](https://getcomposer.org)

    ```
    $ composer install
    ```

2. Copy `wp/wp-config-sample.php` to `/wp-config.php` and customize database settings for your local environment. Use the root directory, because when composer is updating the /wp directory gets overwritten. Add the following lines at the top and adjust your `WP_SITEURL` and `WP_HOME` if needed:

    ```php
    define('WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/content');
    define('WP_CONTENT_DIR', dirname(__FILE__) . '/content');

    define('WP_SITEURL', 'http://fibi.dev/wp/');
    define('WP_HOME', 'http://fibi.dev/');

    ```

3. Log in, activate all plugins and select `For Interaction By Interaction` as theme.

4. Copy `sample.htaccess`to `.htaccess`.

### Remote Database

If you using a remote database (e.g. staging DB), make sure to not upload any files to your local development.
Only ever upload to the staging environment and then download the `content/uploads` folder to have the file locally available.

### Theme development

See [theme/README.md](theme/README.md).

`gulp copy` is used to move the built files to `content/theme/fibi` (after running `gulp build`).

---

## Content Setup

In case you need to setup a site with this template from scratch here's a rough description of the process:

1. Activate all plugins.

2. Synchronize ACF Fields (Custom Fields -> Synchronize)

3. Go to the «Details» options page and save it to initialize the default content. (Yes, this is required).

4. Create all necessary pages with the corresponding page templates

    1. *Note*: For the home page it's a bit … cumbersome. You need to create a page with the corresponding template and set the "Front Page" to this page (Settings -> Reading -> Static Page).

5. Add a Menu (Appearance -> Menus)


---

## Technical Notes

### CMS + Build
The tried and tested Wordpress + [Timber](http://upstatement.com/timber/) + [Twig](http://twig.sensiolabs.org/) + [estatico (modified)](https://github.com/unic/estatico).

### Line
After some consideration, the easiest way to realize this quickly seems to be [paper.js](http://paperjs.org). Paper.js is canvas-based and will perform well enough with the mostly static state of the line. If and only if I get to do the state transitions then I will resize the canvas to viewport size for the animation.

### Overlay Effect

The overlay effect with  `mix-blend-mode: darken;` is a bit tricky.
In order keep everything clickable, the canvas will be placed behind everything and the relevant items (so far only images) will be placed behind the canvas, for which all the images need to be same stacking context.

Now to keep images within anchors clickable we need to add placeholders for each image. This again turns out to be tricky, since we cannot just apply `position: relative` to the parent anchor element since that again would create a stacking context. Thus we need to use dynamically generated inline-styles to position the placeholder absolutely (relative to the document).
*Phew*

---


## Attribution

- The build is based on [estatico (modified)](https://github.com/unic/estatico) by Unic.
- Heavily inspired and partly copied from the [zero theme](https://github.com/gwa/zero) and [library](https://github.com/gwa/zero-library) by GWA.

