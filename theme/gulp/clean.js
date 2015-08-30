'use strict';

/**
 * @function `gulp clean`
 * @desc Remove build and temp folders.
 */

var gulp = require('gulp');

var taskName = 'clean',
	taskConfig = {
		src: [
			'./build',
			'./source/assets/.tmp',
			'../content/themes/fibi/assets',
			'../content/themes/fibi/views',
			'../content/themes/fibi/data'
		]
	};

gulp.task(taskName, function(cb) {
	var del = require('del');

	del(taskConfig.src, {
		force: true
	}, cb);
});

module.exports = {
	taskName: taskName,
	taskConfig: taskConfig
};
