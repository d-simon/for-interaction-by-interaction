'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		title: 'Fonts',
		fonts: [
			{
				family: 'Futwora',
				font: [
					{
						weight: [700],
						style: ['normal'],
						size: [48, 24, 20]
					}
				]
			},
			{
				family: 'Karla',
				font: [
					{
						weight: [400, 700],
						style: ['normal'],
						size: [16]
					}
				]
			}
		]
	});

module.exports = data;
