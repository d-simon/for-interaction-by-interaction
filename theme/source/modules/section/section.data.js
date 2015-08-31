'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Section',
			code: dataHelper.getTemplateCode('section.twig'),
			documentation: dataHelper.getDocumentation('section.md')
		}
	});

module.exports = data;
