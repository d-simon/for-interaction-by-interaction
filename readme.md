![For Interaction By Interaction](https://rawgit.com/d-simon/for-interaction-by-interaction/master/theme/source/preview/assets/media/logo-module.svg "For Interaction By Interaction")

#For Interaction By Interaction — Meta Site

…

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

## Attribution

- The build is based on [estatico (modified)](https://github.com/unic/estatico) by Unic.
- Heavily inspired and partly copied from the [zero theme](https://github.com/gwa/zero) and [library](https://github.com/gwa/zero-library) by GWA.

