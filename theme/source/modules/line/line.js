/*!
 * Line
 *
 * @author David Simon (me@davidsimon.ch)
 *
 * // @requires _line.lib.js
 * // @requires _linesvg.lib.js
 */

;(function($, undefined) {
	'use strict';

	var name = 'line',
		events = {
			// eventname: 'eventname.fibi.' + name
		},
		defaults = {
			domSelectors: {
				// item: '[data-' + name + '="item"]'
			},
			stateClasses: {
				// isActive: 'is_active'
			}
		},
		data = {
			// items: ["Item 1", "Item 2"]
		},
		log = fibi.helpers.log(name);

	/**
	 * Create an instance of the module
	 * @constructor
	 * @param {object} element - The DOM element to bind the module
	 * @param {object} options - Options overwriting the defaults
	 */
	function Module(element, options) {
		this._helper = fibi.helpers.SuperClass;

		this._helper({
			name: name,
			element: element,
			defaults: defaults,
			options: options,
			events: events,
			data: data
		});
	}

	Module.prototype = $.extend(true, {}, fibi.helpers.SuperClass.prototype, Module.prototype);

	/**
	 * Initialize module, bind events.
	 * @method
	 * @public
	 */
	Module.prototype.init = function() {
		log('initialized');

		this.options = _.merge({
			parallaxOffset: 1,
			stroke: {
	            strokeColor: '#C10018',
	            strokeWidth: 60,
	            strokeCap: 'square',
	            strokeJoin: 'miter',
	            miterLimit: 0,
	            fill: 'transparent'
			}
		}, this.options, fibi.data.lineOptions);

		if (!this.options.routes || !this.options.routes.length) {
			throw 'Error: No routes found';
		} else {
			log(this.options.routes.length + ' routes');
		}

		this.$svg = this.$element.find('[data-line="svg"]');
		this.$canvas = this.$element.find('[data-line="canvas"]');

		this.routes = _.cloneDeep(this.options.routes);
		_.each(this.routes, function(route) {
			this._updateRouteOptions(route);
			this._updateSegments(route);
			this._updateRouteSegmentData(route);
		}, this);

		window.requestAnimationFrame(_.bind(this.drawSVG, this));

		$(document).on(fibi.events.resize, _.bind(function() {
			window.requestAnimationFrame(_.bind(function() {
				_.each(this.routes, function(route) {
					this._updateSegments(route);
					this._updateRouteSegmentData(route);
				}, this);
			}, this));

			window.requestAnimationFrame(_.bind(this.drawSVG, this));
		}, this));
	};


	/**
	 * Draw SVG
	 * @method
	 * @private
	 */
	Module.prototype.drawSVG = function() {

		/**
		 *TODO: Refactor this and use a good library for SVG manipulation (such as SnapSVG)
		 */

		this.$svg.find('polyline').remove();

		var polylines = [],
			className = 'mod_line__polyline';

		_.each(this.routes, function(route) {
			var $polyline = $(document.createElementNS('http://www.w3.org/2000/svg', 'polyline'));
			$polyline.attr('points', route.segmentStr);
			$polyline.attr('stroke', route.stroke.strokeColor);
			$polyline.attr('stroke-width', route.stroke.strokeWidth);
			$polyline.attr('fill', route.stroke.fill);

			$polyline.attr('class', $polyline.attr('class') + ' ' + className);
			$polyline.attr('class', $polyline.attr('class') + ' ' + className+'--'+route.id);
			if (route.mq) {
				$polyline.attr('class', $polyline.attr('class') + ' ' + className+'--from-' + ((route.mq && route.mq.from) ? route.mq.from : 'zero'));
				$polyline.attr('class', $polyline.attr('class') + ' ' + className+'--to-'   + ((route.mq && route.mq.to)   ? route.mq.to   : 'infinity'));
			} else {
				$polyline.attr('class', $polyline.attr('class') + ' ' + className+'--all');
			}

			polylines.push($polyline);
		}, this);

		this.$svg.append(polylines);

		this.$svg[0].setAttribute('viewBox', '0 0 ' + document.body.scrollWidth + ' ' + document.body.scrollHeight);
		this.$svg.attr('width', document.body.scrollWidth);
		this.$svg.attr('height', document.body.scrollHeight);
	};

	/**
	 * Update Segments
	 * @method
	 * @private
	 */
	Module.prototype._updateSegments = function(route) {
		return _.each(route.segments, function(segment) {
				this._updateSegment(segment);
			}, this);
	};

	/**
	 * Update single segment
	 * @method
	 * @private
	 */
	Module.prototype._updateSegment = function(segment) {
		return _.merge(segment, this.getPointFromElement(segment.element, segment.offset));
	};

	/**
	 * Update route options
	 * @method
	 * @private
	 */
	Module.prototype._updateRouteOptions = function(route) {
		return _.merge(route, { stroke: this.options.stroke }, route);
	};

	/**
	 * Update segment data
	 * @method
	 * @private
	 */
	Module.prototype._updateRouteSegmentData = function(route) {
		var segmentStr = '';
		_.each(route.segments, function(segment) {
			if (segment.element && segment.element.length) {
				segmentStr += segment.x + ',' + segment.y + ' ';
			}
		});
		route.segmentStr = segmentStr;
	};

	/**
	 * Update SVG from segment data
	 * @method
	 * @public
	 */
	Module.prototype.updateSVG = function() {
	};

	/**
	 * Get point coordinates and related information.
	 * @method
	 * @public
	 */
	Module.prototype.getPointFromElement = function(el, offset) {

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
			y: (y) ? y * this.options.parallaxOffset : y,
			element: $el,
			_el: el,
			_width: elWidth,
			_height: elHeight,
			_offset: elOffset
		};
	};

	/**
	 * Unbind events, remove data, custom teardown
	 * @method
	 * @public
	 */
	Module.prototype.destroy = function() {
		// Unbind events, remove data
		fibi.helpers.SuperClass.prototype.destroy.apply(this);

		// Custom teardown (removing added DOM elements etc.)
		// If there is no need for a custom teardown, this method can be removed
	};

	// Make the plugin available through jQuery (and the global project namespace)
	fibi.helpers.SuperClass.register(Module, name, {
		initEvents: ['ready', 'ajaxload'],
		events: events
	});

})(jQuery);
