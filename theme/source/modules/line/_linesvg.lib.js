/*!
 * Line Library
 *
 * @author David Simon (me@davidsimon.ch)
 *
 */

;(function($, paper, window, undefined) {

	var options = fibi.data.line || {},
		parallaxOffset = 1,
		route = options.routes.main.route;

	$(function() {
		var $svg = $('[data-line="svg"]'),
			$polyline = $svg.find('polyline'),
			segments = [],
			segmentStr = '';

			for (var i = 0; i < route.length; i++) {
			var point, el = $(route[i].element)[0];
			if (el) {
				point = getPointFromElement(el, route[i].offset);

				segments.push(point);
				segmentStr += ' ' + point.x + ',' + point.y;
			}
		}

		$polyline.attr('points', segmentStr);

		// setInterval(function () {
		// 	requestAnimationFrame(animateSVG);
		// }, 16);

		// function animateSVG() {

		// 	$polyline.attr('points', '-60,-60 1300, ' + (500 +$(window).scrollTop()));
		// }
	});

	function getPointFromElement(el, offset) {

		offset = offset || { x: 0, y: 0, anchor: 'top-left' };
		var x, y,
			$el = $(el),
			elOffset = $el.offset(),
			elWidth = $el.width(),
			elHeight = $el.height();

		switch (offset.anchor) {
			case 'top-right':
				x = elOffset.left + elWidth + offset.x;
				y = elOffset.top + offset.y;
				break;
			case 'bottom-left':
				x = elOffset.left + offset.x;
				y = elOffset.top + elHeight + offset.y;
				break;
			case 'bottom-right':
				x = elOffset.left + elWidth + offset.x;
				y = elOffset.top + elHeight + offset.y;
				break;
			default:
				x = elOffset.left + offset.x;
				y = elOffset.top + offset.y;
				break;
		}


		return { x: x, y: y * parallaxOffset };
	}

})(jQuery, paper, window);
