var webpack = require('webpack');
var ExtractTextPlugin =  require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./index.html',
		'./index'
	],
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.html$/, loader: 'file?name=index.html' },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style','css?modules&minimize')}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	]
};