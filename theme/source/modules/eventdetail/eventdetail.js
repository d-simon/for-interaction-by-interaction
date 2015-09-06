/*!
 * Event-Detail
 *
 * @author
 * @copyright
 *
 * //@requires ../../assets/vendor/xy/xy.js
 */

;(function($, undefined) {
	'use strict';

	var name = 'eventdetail',
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
