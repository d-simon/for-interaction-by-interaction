'use strict';

var util = require('gulp-util'),
	data = {
		project: 'For Interaction By Interaction',
		globals: {
			env: util.env,
			gulp: true,
			project: {
				title: 'For Interaction By Interaction',
				lead: 'For Interaction By Interaction – kurz <b>FIBI</b> – ist eine Event-Reihe der Studierenden der Vertiefung Interaction Design der ZHdK. Wir bieten eine Plattform des Austauschs, auf der Studierende, Alumnis und Industrie aufeinander treffen.'
			},
			home_url: '/',
			footer_url: '/'
		},
		mainnav: require('../modules/mainnav/mainnav.data.js').mainnav
	};

module.exports = data;
