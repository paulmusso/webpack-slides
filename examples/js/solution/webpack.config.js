var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery',
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
			{ test: /\.js$/, loader: 'babel?sourceMap'}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
};