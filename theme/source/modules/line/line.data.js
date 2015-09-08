'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Line',
			code: dataHelper.getTemplateCode('line.twig'),
			documentation: dataHelper.getDocumentation('line.md')
		}
	});

module.exports = data;
