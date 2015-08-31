'use strict';

/**
 * @function `gulp bump`
 * @desc Bumps version accross all needed files.
 */

var gulp = require('gulp');

var taskName = 'bump',
	taskConfig = {
		src: [
			'./bower.json',
			'./package.json'
		],
		'dest': './'
	};

gulp.task(taskName, function(cb) {

	var bump = require('gulp-bump'),
		fs = require('fs'),
		inquirer = require('inquirer'),
		json = JSON.parse(fs.readFileSync('./package.json')),
		currentVersion = json.version;

	var callback = function(cb, options) {
		if (!options.type) {
			helpers.errors({
				task: taskName,
				message: 'No bump type :-('
			});
			return cb();
		}

		return gulp.src(taskConfig.src, {
				base: './'
			})
			.pipe(bump({
				type: options.type
			}))
			.pipe(gulp.dest(taskConfig.dest));
	};

	inquirer.prompt([
		{
			type: 'list',
			name: 'type',
			message: 'How would like to bump the version (' + currentVersion + ')?',
			choices: ['prerelease', 'patch', 'minor', 'major'],
			default: 'patch'
		}
	], function(answers) {
		callback(cb, answers);
	});

});

module.exports = {
	taskName: taskName,
	taskConfig: taskConfig
};
