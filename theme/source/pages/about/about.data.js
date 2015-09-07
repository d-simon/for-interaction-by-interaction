'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'About'
		},
		title: 'Idee',
		post: {
			title: 'Idee',
			content: 'FIBI ist eine Plattform des Austauschs. Studierende, Alumnis, Industrie und Gäste begegnen sich, lernen sich kennen und inspirieren. Im Zentrum stehen bei jedem Event die eingeladenen Gäste, die an der Veranstaltung die Möglichkeit haben spezifische Arbeiten und sich selbst vorzustellen. <br><br>Der Begriff Interaction Design und die Arten seiner Auslegung sind unzählig. Den Studierenden sollen Perspektiven und Möglichkeiten aufgezeigt werden. Der eigene Blinkwinkel soll überdacht werden. Wir legen deshalb  Wert darauf, eine möglichst breite Auswahl an Gästen an die ZHdK einzuladen. FIBI findet zwischen drei und vier mal jährlich statt.'
		},
		link_contact: '/pages/contact/contact.html'

	});

module.exports = data;
