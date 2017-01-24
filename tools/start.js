'use strict';

process.env.NODE_ENV = "__DEV__";

var webpack = require('webpack'),
	config = require('../config/project');

require('./webpack.server');