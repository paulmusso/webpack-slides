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
			{ test: /\.css$/, loader: 'style!css'}
		]
	}
};