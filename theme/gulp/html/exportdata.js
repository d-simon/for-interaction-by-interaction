'use strict';

/**
 * @function `gulp html:exportdata`
 * @desc Create static JSON data
 */

var gulp = require('gulp');

var taskName = 'html:exportdata',
	taskConfig = {
		src: './source/**/*.data.js',
		dest: './build/data/',
		watch: 'source/**/*.data.js'
	};

gulp.task(taskName, function() {
	var helpers = require('require-dir')('../../helpers'),
		_ = require('lodash'),
		path = require('path'),
		tap = require('gulp-tap'),
		rename = require('gulp-rename');

	var cleanData = function(data) {
			if (!_.isObject(data)) {
				return data;
			}

			delete data.globals;
			delete data.meta;

			_.each(data, cleanData);

			return data;
		};

	return gulp.src(taskConfig.src, {
			base: './source/',
			read: false
		})
		.pipe(tap(function(file) {
			var data = require(file.path);

			if (path.basename(file.path) !== 'default.data.js') {
				data = cleanData(data);
			}

			file.contents = new Buffer(JSON.stringify(data));
		}))
		.pipe(rename(function(path) {
			path.basename = path.basename.replace('.data', '');
			path.extname = '.json';
		}))
		.pipe(gulp.dest(taskConfig.dest));
});

module.exports = {
	taskName: taskName,
	taskConfig: taskConfig
};
