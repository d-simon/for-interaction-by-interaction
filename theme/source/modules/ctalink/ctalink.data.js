'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'CTA-Link',
			code: dataHelper.getTemplateCode('ctalink.twig'),
			documentation: dataHelper.getDocumentation('ctalink.md')
		}
	});

module.exports = data;
