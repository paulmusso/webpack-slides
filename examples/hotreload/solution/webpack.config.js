module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:8000",
		'webpack/hot/dev-server',
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