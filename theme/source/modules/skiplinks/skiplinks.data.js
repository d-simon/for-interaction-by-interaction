'use strict';

var _ = require('lodash'),
    requireNew = require('require-new'),
    dataHelper = require('../../../helpers/data.js'),
    defaultData = requireNew('../../data/default.data.js');

var data = _.merge(defaultData, {
        meta: {
            title: 'Skiplinks',
            code: dataHelper.getTemplateCode('skiplinks.twig')
        },
        links: [
            {
                href: '#main',
                accesskey: 1,
                title: '[ALT + 1]',
                label: 'Skip to content'
            }
        ]
    });

module.exports = data;
