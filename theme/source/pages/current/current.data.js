'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	eventData = requireNew('../../modules/event/event.data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Current'
		},
		title: 'Current',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		posts: [
			_.merge({}, eventData.event, {
				title: 'Besuch bei Google',
				post_date: '2015-10-06 18:50:37',
				thumbnail: '/tmp/media/event-current.jpg',
				event_link_flyer: 'http://fibi.zhdk.ch'
			}),
			_.merge({}, eventData.event, {})
		],
		link_about: '/pages/about/about.html'
	});

module.exports = data;
