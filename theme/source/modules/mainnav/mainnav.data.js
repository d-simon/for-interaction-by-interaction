'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
		meta: {
			title: 'Main-Navigation',
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
					title: 'Idee',
					get_link: '/pages/about/about.html'
				},
				{
					title: 'Kontakt',
					get_link: '/pages/contact/contact.html'
				},
				{
					title: 'Archiv',
					get_link: '/pages/archive/archive.html'
				},
				{
					title: '(Spacer)',
					get_link: '#'
				},
				{
					title: 'Newsletter',
					get_link: '/pages/newsletter/newsletter.html'
				},
			]
		}

	});

module.exports = data;
