/*!
 * Line Library
 *
 * @author David Simon (me@davidsimon.ch)
 *
 */

;(function($, paper, window, undefined) {

	var options = fibi.data.line || {},
		parallaxOffset = 1,
		route = options.routes.main.route,
		$svg,
		$polyline,
		segments = [],
		segmentStr = '';

	$(function() {

		$svg = $('[data-line="svg"]');
		$polyline = $svg.find('polyline');

		setSVG();
	});

	$(window).resize(function() {
		requestAnimationFrame(setSVG);
	});

	function setSVG() {

		segments = [];
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

		$svg[0].setAttribute('viewBox', '0 0 ' + document.body.scrollWidth + ' ' + document.body.scrollHeight);
		$svg.attr('width', document.body.scrollWidth);
		$svg.attr('height', document.body.scrollHeight);
	}

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
