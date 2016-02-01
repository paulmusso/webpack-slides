const HtmlWebpackPlugin = require('html-webpack-plugin');
const process = require('process');

const config = {
	entry: [
		'file?name=highlight.js!reveal.js/plugin/highlight/highlight.js',
		'reveal.js/css/reveal.css',
		'reveal.js/lib/css/zenburn.css',
		'./src/theme.css',
		'script!reveal.js/lib/js/html5shiv.js',
		'script!reveal.js/lib/js/head.min.js',
		'script!reveal.js',
		'./src/styles.css',
		'./src/index.html'
	],

  	output: {
    	path: 'dist',
    	filename: 'bundle.js',
    	publicPath: process.env.PUBLIC_PATH || '/'
    },

	module: {
		loaders: [
			{ test: /\.html/, loaders: ['file?name=[name].[ext]']},
			{ test: /\.js/, loaders: ['babel'], exclude: /node_modules/ },
			{ test: /\.css/, loaders: ['style','css'] },
			{ test: /\.png/,   loader: 'file' },
			{ test: /\.svg/,   loader: 'file' },
			{ test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,   loader: 'file' },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' }
		]
	},

	progress: true
};

if (process.env.NODE_ENV !== 'production') {
	config.entry = [
			'./hotReload',
			'webpack/hot/dev-server'
		].concat(config.entry);
	config.debug = true;
	config.devtool = 'source-map';
}

module.exports = config;