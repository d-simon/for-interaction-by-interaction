/*!
 * Line Library
 *
 * @author David Simon (me@davidsimon.ch)
 *
 */

;(function($, paper, window, undefined) {

var path,
	scrollOffset = 0,
	parallaxOffset = 1,
	route,
	segments,
	start,
	options = fibi.data.line || {};

	paper.install(window);
	window.onload = function() {
		paper.setup('mod_line__canvas');

		path = new Path(options.stroke || {
			strokeColor: '#C10018',
			strokeWidth: 60,
			strokeCap: 'square',
			strokeJoin: 'miter',
			miterLimit: 0
		});

		start = new Point(0, 0);

		route = options.routes.main.route;

		for (var i = 0; i < route.length; i++) {
			var point, el = $(route[i].element)[0];
			if (el) {
				point = getPointFromElement(el, route[i].offset);

				path.add(point);

				if (i === 0) {
					start.x = point.x;
					start.y = point.y;
				}
			}
		}

		moveLine();

	};

	$(document).scroll(function () {
		if (path) {
			scrollOffset = $(window).scrollTop();
			requestAnimationFrame(moveLine);
		}
	});

	$(window).resize(function () {
		if (path) {
			requestAnimationFrame(updatePoints);
			requestAnimationFrame(moveLine);
		}
	});

	function updatePoints() {
		for (var i = 0; i < route.length; i++) {
			var point, el = $(route[i].element)[0];

			if (el) {
				point = getPointFromElement(el, route[i].offset);

				path.segments[i].point = point;


				if (i === 0) {
					start.x = point.x;
					start.y = point.y;
				}
			}
		}
		paper.execute();
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


		return new Point(x, y * parallaxOffset);
	}


	function moveLine() {
		// for (var i = 0; i < 10; i++) {
		// 	var segment = path.segments[i];
		// 	// console.log(segment);
		// 	segment.point.x = i * 100 + (0.5 - Math.random())*40;
		// 	segment.point.y = i * 100 + (0.5 - Math.random())*40;
		// }
		// console.log(path.bounds);
		path.position = [start.x + path.bounds.width/2, start.y + path.bounds.height/2 - scrollOffset * parallaxOffset];
		paper.execute();
	}

})(jQuery, paper, window);
