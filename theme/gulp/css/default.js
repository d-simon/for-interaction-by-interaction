'use strict';

/**
 * @function `gulp css`
 * @desc Compile Sass to CSS (using `LibSass`), run autoprefixer on the generated CSS.
 */

var gulp = require('gulp');

var taskName = 'css',
	taskConfig = {
		src: [
			'./source/assets/css/*.scss',
			'./source/preview/assets/css/*.scss'
		],
		srcBase: './source/',
		include: [
			'./source/assets/css/',
			'./source/assets/vendor/',
			'./source/modules/'
		],
		dest: './build/',
		watch: [
			'source/assets/css/**/*.scss',
			'source/assets/.tmp/**/*.scss',
			'source/modules/**/*.scss',
			'source/demo/modules/**/*.scss',
			'source/preview/assets/css/**/*.scss'
		],
		plugins: {
			autoprefixer: 'last 2 version'
		}
	},
	task = function(config, cb) {
		var helpers = require('require-dir')('../../helpers'),
			plumber = require('gulp-plumber'),
			size = require('gulp-size'),
			livereload = require('gulp-livereload'),
			util = require('gulp-util'),
			sourcemaps = require('gulp-sourcemaps'),
			libSass = require('gulp-sass'),
			autoprefixer = require('gulp-autoprefixer'),
			cssMinify = require('gulp-minify-css'),
			rename = require('gulp-rename'),
			lazypipe = require('lazypipe'),
			ignore = require('gulp-ignore'),
			path = require('path');

		var writeSourceMaps = lazypipe()
				.pipe(sourcemaps.write, '.', {
					includeContent: false,
					sourceRoot: config.srcBase
				}),
			minify = lazypipe()
				.pipe(gulp.dest, config.dest)
				.pipe(ignore.exclude, function(file) {
					return path.extname(file.path) === '.map';
				})
				.pipe(cssMinify)
				.pipe(rename, {
					suffix: '.min'
				})
				.pipe(writeSourceMaps);

		gulp.src(config.src, {
			base: config.srcBase
		})
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(libSass.sync({
				includePaths: config.include
			}).on('error', helpers.errors))
			.pipe(autoprefixer(config.plugins.autoprefixer).on('error', helpers.errors))
			.pipe(writeSourceMaps())
			.pipe(util.env.dev ? util.noop() : minify())
			.pipe(size({
				title: taskName,
				showFiles: true
			}))
			.pipe(gulp.dest(config.dest))
			.pipe(livereload())
			.on('end', cb);
	};

gulp.task(taskName, function(cb) {
	return task(taskConfig, cb);
});

module.exports = {
	taskName: taskName,
	taskConfig: taskConfig,
	task: task
};
