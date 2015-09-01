'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Mainnav',
			code: dataHelper.getTemplateCode('mainnav.twig'),
			documentation: dataHelper.getDocumentation('mainnav.md')
		},
		mainnav: {
			get_items: [
				{
					title: 'Aktuell',
					get_link: '/pages/home/home.html'
				},
				{
					title: 'Archiv',
					get_link: '#'
				},
				{
					title: 'Idee',
					get_link: '#'
				},
				{
					title: '(Spacer)',
					get_link: '#'
				},
				{
					title: 'Kontakt',
					get_link: '#'
				},
				{
					title: 'Newsletter',
					get_link: '#'
				},
			]
		}

	});

module.exports = data;
