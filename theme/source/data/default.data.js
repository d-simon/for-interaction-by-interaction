'use strict';

var util = require('gulp-util'),
	data = {
		project: 'Schäfer AG',
		globals: {
			env: util.env,
			gulp: true
		}
	};

module.exports = data;
