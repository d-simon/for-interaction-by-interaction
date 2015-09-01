'use strict';

/**
 * @function `gulp html`
 * @desc Compile Handlebars templates to HTML. Use `.data.js` files for - surprise! - data.
 */

var gulp = require('gulp');

var taskName = 'html',
	taskConfig = {
		src: './source/{,demo/}{,pages/**/,modules/**/,preview/styleguide/**/}!(_)*.twig',
		includes: './source/{,demo/}{,layouts/,modules/**/,preview/**/}*.twig',
		dest: './build/',
		watch: [
			'source/{,demo/}{,layouts/,pages/**/,modules/**/,preview/**/}*.twig',
			'source/{,demo/}{,layouts/,pages/**/,modules/**/,preview/**/}*.data.js',
			'source/{,demo/}modules/**/*.md',
			'source/assets/css/data/colors.json'
		]
	};

gulp.task(taskName, function(cb) {
	var helpers = require('require-dir')('../../helpers'),
		plumber = require('gulp-plumber'),
		livereload = require('gulp-livereload'),
		util = require('gulp-util'),
		requireNew = require('require-new'),
		path = require('path'),
		tap = require('gulp-tap'),
		rename = require('gulp-rename'),
		// prettify = require('gulp-prettify'),
		twig = require('gulp-twig');

	var fileExists = function(path) {
			// From https://www.npmjs.com/package/is-there
			try {
				fs.statSync(path);

				return true;
			} catch (err) {
				return (err.code !== 'ENOENT');
			};
		},
		twigFunctions = [
			{
				/**
				 * This function is simply a mockup of a proxy function for
				 * get_field which enables us to use the same template in
				 * the frontend and backend by implementing the same
				 * function in Twig.js and Timber.
				 */
				name: "getField",
				func: function (event, field_name) {
					return (event) ? event[field_name] : null;
				}
			}
		];

	gulp.src(taskConfig.src, {
			base: './source'
		})
		.pipe(tap(function(file) {
			var dataFile = util.replaceExtension(file.path, '.data.js'),
				data = (function() {
					if (fileExists(dataFile)) {
						try {
							return requireNew(dataFile);
						} catch (err) {
							helpers.errors({
								task: taskName,
								message: 'Error reading "' + path.relative('./', dataFile) + '": ' + err
							});
						}
					} else if (util.env.dev) {
						console.log('[Info] No data file "' + path.relative('./', dataFile) + '" found.');
					}
				})(),
				modulePrepend = new Buffer('{% extends "preview/layouts/module.twig" %}{% block content %}'),
				moduleAppend = new Buffer('{% endblock %}');

			// Save data by file name
			file.data = data;

			// Wrap modules with custom layout for preview purposes
			if (file.path.indexOf(path.sep + 'modules' + path.sep) !== -1) {
				file.contents = Buffer.concat([modulePrepend, file.contents, moduleAppend]);
			}
		}))
		.pipe(plumber())
		.pipe(twig({
			data: function(file) {
				return file.data;
			},
			base: './source/',
			includes: taskConfig.includes,
			functions: twigFunctions,
			getIncludeId: function(filePath) {
				return path.relative('./source', filePath);
			}
		}).on('error', helpers.errors))
		// Relativify absolute paths
		.pipe(tap(function(file) {
			var content = file.contents.toString(),
				relPathPrefix = path.join(path.relative(file.path, './source')).replace(/\.\.$/, '');

			content = content.replace(/('|")\//g, '$1' + relPathPrefix);

			file.contents = new Buffer(content);
		}))
		// .pipe(prettify({
		// 	indent_with_tabs: true,
		// 	max_preserve_newlines: 1
		// }))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest(taskConfig.dest))
		.on('finish', function() {
			livereload.reload();

			cb();
		});
});

module.exports = {
	taskName: taskName,
	taskConfig: taskConfig
};
