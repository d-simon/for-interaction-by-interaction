'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		title: 'Fonts',
		fonts: [
			{
				family: 'FFMarkWeb',
				font: [
					{
						weight: [700],
						style: ['normal'],
						size: [72, 48, 36, 20, 16]
					},
					{
						weight: [400],
						style: ['normal'],
						size: [16]
					}
				]
			}
		]
	});

module.exports = data;
