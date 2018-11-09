#!/usr/bin/env node
'use strict';
const path = require('path');
const meow = require('meow');
const execa = require('execa');
const macosVersion = require('macos-version');

macosVersion.assertGreaterThanOrEqualTo('10.14');

meow(`
	Example
	  $ touch-bar
`);

const appPath = path.resolve(__dirname, 'vendor/Touch Bar Simulator.app');

execa('open', ['-a', appPath]);
