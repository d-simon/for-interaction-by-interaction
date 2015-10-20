'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	defaultData = requireNew('../../data/default.data.js'),
	eventData = requireNew('../../modules/event/event.data.js'),
	panoramaData = requireNew('../../modules/panorama/panorama.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: '<b>Home</b>'
		},
		title: 'Home',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		posts_current: [_.merge({}, eventData.event, {
			title: 'Besuch bei Google',
			post_date: '2015-10-06 18:50:37',
			thumbnail: '/tmp/media/event-current.jpg',
			event_link_flyer: 'http://fibi.zhdk.ch'
		})],
		posts_archive: [
			eventData.event,
			eventData.event,
			eventData.event
		],
		image_panorama: panoramaData.image,
		link_about: '/pages/about/about.html'
	});

module.exports = data;
