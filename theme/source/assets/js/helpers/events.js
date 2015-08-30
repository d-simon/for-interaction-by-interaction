/**
 * Add debounced global resize and scroll events
 *
 * @license APLv2
 *
 * @example
 * // Listen to debounced scroll event:
 * $document.on(fibi.events.resize, function(event, originalEvent) {
 * 	console.log(originalEvent); // original scroll event
 * });
 */

;(function($, undefined) {
	'use strict';

	var $document = $(document),
		events = {
			resize: 'debouncedresize.fibi',
			scroll: 'debouncedscroll.fibi'
		},
		interval = {
			resize: 50,
			scroll: 50
		};

	$(window)
		.on('resize.fibi', _.debounce(function(event) {
			$document.triggerHandler(events.resize, event);
		}, interval.resize))
		.on('scroll.fibi', _.debounce(function(event) {
			$document.triggerHandler(events.scroll, event);
		}, interval.scroll));

	// Save to global namespace
	$.extend(true, fibi, {
		events: events
	});

})(jQuery);
