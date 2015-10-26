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
	targetSegments = [],
	start,
	options = fibi.data.lineOptions || {},
	log = fibi.helpers.log('line:canvas');

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

		route = options.routes[0].segments;

		for (var i = 0; i < route.length; i++) {
			var point, el = $(route[i].element)[0];
			if (el) {
				point = getPointFromElement(el, route[i].offset);

				targetSegments.push(new Point(point.x, point.y));

				if (i === 0) {
					start.x = point.x;
					start.y = point.y;
				}

				// point.y = $(window).height()*i;

				path.add(point);

			}
		}



		moveLine();

		// var progress = 0;
		// var t = new TWEEN.Tween({ progress: 0 })
		// 	.to({ progress: 1 }, 1000)
  //           .easing( TWEEN.Easing.Cubic.InOut )
  //           .onUpdate(function() {
		// 		var progress = this.progress;
		// 		// log(progress);
		// 		_.each(path.segments, function(segment, index) {
		// 			// log(segment.point);
		// 				// log($(window).width() / 2 * (1 - progress));

		// 				var staggerStep = Math.min(1, progress + 0.1 * (1 - map(index, 0, path.segments.length, 0, 1)));
		// 				segment.point.y = targetSegments[index].y + 100 * (index) * (1-progress);
		// 				// segment.point.y = ($(window).height()*i * (1 - progress)) + targetSegments[index].y * progress;
		// 				// EaseInOut
		// 		}, this);
		// 		scrollOffset = $(window).scrollTop();
		// 		moveLine();
		// 	})
		// 	.onComplete(function() {
		// 		// $(window).resize();
		// 		// requestAnimationFrame(function() {
		// 		// 	setTimeout(function () {
		// 		// 		$('#mod_line__canvas').hide(); // DEV
		// 		// 	}, 100);
		// 		// });
		// 	})
		// 	.start();


		// _.each(path.segments, function(segment, index) {
		// 	// log(segment.point);
		// 		// log($(window).width() / 2 * (1 - progress));
		// 		var t = new TWEEN.Tween({ progress: 0 })
		// 			.to({ progress: 1 }, 1000+ ((index < 6) ? index*500 : 6 * 400+index*50))
		//             .easing( TWEEN.Easing.Cubic.InOut )
		//             .onUpdate(function() {
		// 				var progress = this.progress;
		// 				// log(progress);

		// 				segment.point.y = targetSegments[index].y + 100 * (index) * (1-progress);

		// 				scrollOffset = $(window).scrollTop();
		// 				moveLine();
		// 			})
		// 			.onComplete(function() {
		// 				segment.point.y = targetSegments[index].y;
		// 				moveLine();
		// 			})
		// 			.start();
		// 			// segment.point.y = ($(window).height()*i * (1 - progress)) + targetSegments[index].y * progress;
		// 			// EaseInOut
		// }, this);




		// function animate(time) {
	 //        requestAnimationFrame( animate ); // js/RequestAnimationFrame.js needs to be included too.
	 //        TWEEN.update(time);
	 //    }
	 //    animate();

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

	$('body').imagesLoaded(_.bind(function () {
		if (path) {
			requestAnimationFrame(updatePoints);
			requestAnimationFrame(moveLine);
		}
	}, this));

	function updatePoints() {
		for (var i = 0; i < route.length; i++) {
			var point, el = $(route[i].element)[0];

			if (el) {
				point = getPointFromElement(el, route[i].offset);

				if (i === 0) {
					start.x = point.x;
					start.y = point.y;
				}

				path.segments[i].point = point;
			}
		}
	}


	function getPointFromElement(el, offset) {

		offset = offset || { x: 0, y: 0, anchor: 'top-left' };


		var x = 0, y = 0,
			elOffset = 0,
			elWidth = 0,
			elHeight = 0,
			$el = $(el);

		if ($el.length) {
			elOffset = $el.offset();
			elWidth = $el.width();
			elHeight = $el.height();

			switch (offset.anchor) {
				case 'top-right':
					x = elOffset.left + elWidth + offset.x;
					y = elOffset.top + offset.y;
					break;
				case 'top-middle':
					x = elOffset.left + elWidth / 2 + offset.x;
					y = elOffset.top + offset.y;
					break;
				case 'bottom-middle':
					x = elOffset.left + elWidth / 2 + offset.x;
					y = elOffset.top + elHeight + offset.y;
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

		}

		return {
			x: x,
			y: y,
			element: $el,
			_el: el,
			_width: elWidth,
			_height: elHeight,
			_offset: elOffset
		};
	}



	function moveLine() {
		// for (var i = 0; i < 10; i++) {
		// 	var segment = path.segments[i];
		// 	// console.log(segment);
		// 	segment.point.x = i * 100 + (0.5 - Math.random())*40;
		// 	segment.point.y = i * 100 + (0.5 - Math.random())*40;
		// }
		// console.log(path.bounds);

		// _.each(path.segments, function(segment, index) {
		// 	// log(segment.point);
		// 		// segment.point.y = $(window).height() * progress + (targetSegments[index].y - scrollOffset - $(window).height()/2) * 0.3;
		// 		// segment.point.y = (*i * (1 - progress)) + targetSegments[index].y * progress;
		// 		segment.point.y = targetSegments[index].y;


		// 		var progressSegment = targetSegments[index].y / $(document).height();
		// 		var progressTotal = (scrollOffset + $(window).height() / 2) / $(document).height();
		// 		var animateStepForSegment = 0;

		// 		if (progressTotal <= progressSegment) {
		// 			animateStepForSegment = map(progressTotal, 0, progressSegment, 1, 0.5);
		// 		} else {
		// 			animateStepForSegment = map(progressTotal, progressSegment, 1, 0.5, 0);
		// 		}

		// 		if (animateStepForSegment < 0.3)  animateStepForSegment = 0;
		// 		else if (animateStepForSegment > 0.7)  animateStepForSegment = 1;

		// 		segment.point.y = animateStepForSegment;
		// 		// EaseInOut
		// });
		path.position = [
			start.x + path.segments[0].point.x - path.bounds.left + path.bounds.width / 2,
			start.y + path.segments[0].point.y - path.bounds.top  + path.bounds.height / 2 - scrollOffset
		];
		paper.execute();
	}

	function map(x, in_min, in_max, out_min, out_max) {
		return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}

})(jQuery, paper, window);
