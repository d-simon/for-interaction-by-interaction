'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Panorama',
			code: dataHelper.getTemplateCode('panorama.twig'),
			documentation: dataHelper.getDocumentation('panorama.md')
		},
		image: '/tmp/media/panorama.jpg',
		alt: 'A suitable image description.'
	});

module.exports = data;
