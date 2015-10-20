'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Newsletter',
			code: dataHelper.getTemplateCode('newsletter.twig'),
			documentation: dataHelper.getDocumentation('newsletter.md')
		}
	});

module.exports = data;
