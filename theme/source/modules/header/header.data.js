'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Header',
			code: dataHelper.getTemplateCode('header.twig'),
			documentation: dataHelper.getDocumentation('header.md')
		}
	});

module.exports = data;
