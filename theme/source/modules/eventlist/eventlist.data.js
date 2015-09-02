'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Eventlist',
			code: dataHelper.getTemplateCode('eventlist.twig'),
			documentation: dataHelper.getDocumentation('eventlist.md')
		}
	});

module.exports = data;
