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
			title: 'iart zu Gast aus Basel',
			post_date: '2015-05-06 18:00:26',
			event_excerpt: 'iart gestaltet medientechnische Installationen und berücksichtigt dabei sowohl visuelle als auch inhaltliche und narrative Aspekte, um Menschen und Räume durch Interaktion miteinander zu verbinden. ',
			content: 'Seit 2001 realisiert iart Projekte im Spannungsfeld von Medien, Kunst und Technologie mit dem Schwerpunkt Interaktion im Raum. Mit dem Hintergrund eines Ingenieurbüros stellt iart sich komplexen Gestaltungsaufgaben als interdisziplinäres Kompetenzzentrum aus den Bereichen Management, Design, Engineering und Servicing. Die im Team vereinten Kompetenzen und die langjährige Projekterfahrung lassen ermöglichen es dem Team, flexibel auf die Bedürfnisse der vielseitigen Projekte aus Kultur, Architektur und Industrie einzugehen.',
			event_guests: [{
				'event_guest_name': 'iart',
				'event_guest_type': 'organisation',
				'event_guest_url': 'url'
			},{
				'event_guest_name': 'Test Gast',
				'event_guest_type': 'Person',
				'event_guest_url': false
			}]
		}
	});

module.exports = data;
