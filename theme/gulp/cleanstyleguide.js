'use strict';

/**
 * @function `gulp clean:styleguide`
 * @desc Remove styleguide folder.
 */

var gulp = require('gulp');

var taskName = 'clean:styleguide',
	taskConfig = {
		src: [
			'../styleguide'
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
