'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js'),
	eventData = requireNew('../event/event.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Event-Detail',
			code: dataHelper.getTemplateCode('eventdetail.twig'),
			documentation: dataHelper.getDocumentation('eventdetail.md')
		},
		event: _.merge(eventData.event, {
			event_location: 'ZHdK, Toni Areal, 5.K03',
			content: 'Seit 2001 realisiert iart Projekte im Spannungsfeld von Medien, Kunst und Technologie mit dem Schwerpunkt Interaktion im Raum. Mit dem Hintergrund eines Ingenieurbüros stellt iart sich komplexen Gestaltungsaufgaben als interdisziplinäres Kompetenzzentrum aus den Bereichen Management, Design, Engineering und Servicing. Die im Team vereinten Kompetenzen und die langjährige Projekterfahrung lassen ermöglichen es dem Team, flexibel auf die Bedürfnisse der vielseitigen Projekte aus Kultur, Architektur und Industrie einzugehen.'
		})
	});

module.exports = data;
