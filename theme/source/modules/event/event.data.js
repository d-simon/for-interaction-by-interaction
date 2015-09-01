'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Event',
			code: dataHelper.getTemplateCode('event.twig'),
			documentation: dataHelper.getDocumentation('event.md')
		},
		event: {
			event_guests: {
				'event_guest_name': 'iart',
				'event_guest_type': 'organisation',
				'event_guest_url': 'url'
			}
		}
	});

module.exports = data;
