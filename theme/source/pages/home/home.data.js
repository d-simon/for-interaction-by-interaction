'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Home'
		},
		title: 'Home',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		post_current: {
			fields: {},
			title: 'Zu Besuch bei Google',
			content: '',
			event_guests: {
				'event_guest_name': 'iart',
				'event_guest_type': 'organisation',
				'event_guest_url': 'url'
			}
		},
		posts_archive: [
			{
				fields: {},
				title: 'iart zu Gast aus Basel',
				content: '',
				event_guests: {
					'event_guest_name': 'iart',
					'event_guest_type': 'organisation',
					'event_guest_url': 'url'
				}
			}
		]
	});

module.exports = data;
