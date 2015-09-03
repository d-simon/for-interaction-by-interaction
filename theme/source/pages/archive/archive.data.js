'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	defaultData = requireNew('../../data/default.data.js'),
	eventData = requireNew('../../modules/event/event.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Archive'
		},
		title: 'Archiv',
		posts: [
			eventData.event,
			eventData.event,
			eventData.event
		],
		link_current: '/pages/home/home.html'
	});

module.exports = data;
