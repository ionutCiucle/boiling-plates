const webpack = require('webpack');
const path = require('path');

const config = {
	entry: __dirname + '/src/js/main.js',
	output: {
		path: __dirname + '/build/js',
		filename: 'bundle.js',
		sourcePrefix: ''
	},
	module: {
		loaders: [{
			test: /\.js?/,
			loader: 'babel'
		}]
	}
};

module.exports = config;
