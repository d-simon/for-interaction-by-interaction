/**
 * Trigger custom events when changing breakpoint, get breakpoints from CSS properties
 *
 * @license APLv2
 *
 * @example
 * // Listen to custom (debounced) event to react to viewport changes:
 * $document.on(fibi.events.mq, function(event, prevBreakpoint, currentBreakpoint) {
 * 	console.log(prevBreakpoint); // { name: "small", value: "768px" }
 * 	console.log(parseInt(prevBreakpoint.value)); // "768"
 * });
 *
 * // Check the current breakpoint:
 * if (fibi.mq.currentBreakpoint.name === 'large') {
 * 	this.destroySmall();
 * 	this.initLarge();
 * }
 *
 * // Check the current viewport against a specific breakpoint:
 * if (parseInt(fibi.mq.currentBreakpoint.value) > parseInt(fibi.mq.breakpoints.small)) {
 * 	this.destroySmall();
 * 	this.initLarge();
 * }
 */

;(function($, undefined) {
	'use strict';

	function parseCssProperty(str) {
		return $.parseJSON($.trim(str.replace(/^('|")|(\\)|('|")$/g, '')));
	}

	var $document = $(document),
		events = {
			mq: 'mq.fibi'
		},
		$head = $document.find('head'),
		$title = $head.find('title'),
		breakpointsString = $head.css('font-family'),
		currentBreakpointString = $title.css('font-family'),
		breakpoints = parseCssProperty(breakpointsString),
		currentBreakpoint = parseCssProperty(currentBreakpointString);

	$document.on(fibi.events.resize + '.mq', function() {
		var breakpoint = parseCssProperty($title.css('font-family')),
			prevBreakpoint = fibi.mq.currentBreakpoint;

		if (breakpoint && breakpoint.name !== fibi.mq.currentBreakpoint.name) {
			fibi.mq.currentBreakpoint = breakpoint;

			$document.triggerHandler(events.mq, [prevBreakpoint, breakpoint]);
		}
	});

	// Save to global namespace
	$.extend(true, fibi, {
		events: events,
		mq: {
			breakpoints: breakpoints,
			currentBreakpoint: currentBreakpoint
		}
	});

})(jQuery);
