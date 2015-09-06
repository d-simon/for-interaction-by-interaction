'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Slider',
			code: dataHelper.getTemplateCode('slider.twig'),
			documentation: dataHelper.getDocumentation('slider.md')
		},
		center_mode: false,
		slides: _.fill(
			Array(5),
			{
				url: '/tmp/media/event-current.jpg'
			}
		)
	});

module.exports = data;
