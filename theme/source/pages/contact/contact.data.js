'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Contact'
		},
		title: 'Kontakt',
		content:
			'<strong>Verantwortlich 2015/16</strong><br>' +
			'Robine Jöhr<br>' +
			'<a href="mailto:robine.joehr@zhdk.ch">robine.joehr@zhdk.ch</a><br>' +
			'<a href="tel:+41761234567">+41 76 123 45 67</a><br>' +
			'<br>' +
			'<strong>Unterstützt durch</strong><br>' +
			'<a href="http://iad.zhdk.ch/" target="_blank">Vertiefung Interaction Design ZHdK</a><br>' +
			'<br>' +
			'<strong>Web Gestaltung &amp; Programmierung</strong><br>' +
			'<a href="http://davidsimon.ch/" target="_blank">David Simon</a><br>'
	});

module.exports = data;
