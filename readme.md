![For Interaction By Interaction](https://rawgit.com/d-simon/for-interaction-by-interaction/master/theme/source/preview/assets/media/logo-module.svg "For Interaction By Interaction")

#For Interaction By Interaction — Meta Site

## Setup
### Installation

1. Install dependencies using [Composer](https://getcomposer.org)

    ```
    $ composer install
    ```

2. Copy `wp/wp-config-sample.php` to `/wp-config.php` and customize database settings for your local environment. Use the root directory, because when composer is updating the /wp directory gets overwritten. Add the following lines at the top:

    ```php
    define('WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/content');
    define('WP_CONTENT_DIR', $_SERVER['DOCUMENT_ROOT'] . '/content');

    define('WP_SITEURL', 'http://fibi.dev/wp/');
    define('WP_HOME', 'http://fibi.dev/');

    ```

3. Log in, activate all plugins and select `Custom Theme` as theme.

4. Copy `sample.htaccess`to `.htaccess`.

### Remote Database

If you using a remote database (e.g. staging DB), make sure to not upload any files to your local development.
Only ever upload to the staging environment and then download the `content/uploads` folder to have the file locally available.

### Theme development

See [theme/README.md](theme/README.md).

`gulp copy` is used to move the built files to `content/theme/fibimeta` (after running `gulp build`).

---

## Technical Notes

### CMS + Build
The tried and tested Wordpress + [Timber](http://upstatement.com/timber/) + [Twig](http://twig.sensiolabs.org/) + [estatico (modified)](https://github.com/unic/estatico).

### Line
After careful consideration the easiest way to realize this quickly will be to use [paper.js](http://paperjs.org). This is canvas based will perform well enough with the mostly static state. If and only if I get to do the state transitions then I will resize the canvas to viewport size for the animation.

### Overlay Effect

The overlay effect with  `mix-blend-mode: darken;` is a bit tricky.
In order keep everything clickable, the canvas will be placed behind everything and the relevant items (so far only images) will be placed behind the canvas, for which all the images need to be same stacking context.

Now to keep images within anchors clickable we need to add placeholders for each image. This again turns out to be tricky, since we cannot just apply `position: relative` to the parent anchor element since that again would create a stacking context. Thus we need to use dynamically generated inline-styles to position the placeholder absolutely (relative to the document).

*Phew*

---


## Attribution

- The build is based on [estatico (modified)](https://github.com/unic/estatico) by Unic.
- Heavily inspired and partly copied from the [zero theme](https://github.com/gwa/zero) and [library](https://github.com/gwa/zero-library) by GWA.

