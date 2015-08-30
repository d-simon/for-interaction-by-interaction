'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: '{{titleCaseName}}',
			code: dataHelper.getTemplateCode('{{name}}.twig'),
			documentation: dataHelper.getDocumentation('{{name}}.md')
		}
	});

module.exports = data;
