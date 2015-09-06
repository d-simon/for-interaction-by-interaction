'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	defaultData = requireNew('../../data/default.data.js'),
	eventdetailData = requireNew('../../modules/eventdetail/eventdetail.data.js');;

var data = _.merge(defaultData, {
		meta: {
			title: 'Event'
		},
		title: 'Event',
		post: eventdetailData.event
	});

module.exports = data;
