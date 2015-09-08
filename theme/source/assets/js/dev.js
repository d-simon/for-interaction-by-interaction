/**
 * @requires ../vendor/bows/dist/bows.js
 */

;(function(undefined) {
	'use strict';

	if (!localStorage.debug) localStorage.debug = true;
	window.fibi.helpers.log = bows;

})();
