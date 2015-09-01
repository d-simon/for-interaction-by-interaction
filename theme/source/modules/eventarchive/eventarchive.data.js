'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Eventarchive',
			code: dataHelper.getTemplateCode('eventarchive.twig'),
			documentation: dataHelper.getDocumentation('eventarchive.md')
		}
	});

module.exports = data;
