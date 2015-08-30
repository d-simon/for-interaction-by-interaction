'use strict';

/**
 * @function `gulp copy:styleguide`
 * @desc Copy the styleguide into separate directory
 */

var gulp = require('gulp');

var taskName = 'copy:styleguide',
	taskConfig = {
		src: [
			'./build/**/*'
		],
		dest: '../styleguide/',
		watch: []
	};

gulp.task(taskName, ['html:exportdata', 'clean:styleguide'], function() {
	var changed = require('gulp-changed'),
		rename = require('gulp-rename');

	return gulp.src(taskConfig.src, {
			base: './build'
		})
		.pipe(changed(taskConfig.dest))
		.pipe(gulp.dest(taskConfig.dest));
});

module.exports = {
	taskName: taskName,
	taskConfig: taskConfig
};
