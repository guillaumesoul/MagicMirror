const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
//import ImageminPlugin from 'imagemin-webpack-plugin'

module.exports = {
	//entry: './js/test1.js',
	//entry: './js/cssLoader.js',
	/*entry: {
		cssLoader: './js/cssLoader.js'
	},*/
	/*entry: [
		'./js/defaults.js',
		'./config/config.js',
		'./vendor/vendor.js',
		'./modules/default/defaultmodules.js',
		'./js/logger.js',
		'./translations/translations.js',
		'./js/translator.js',
		'./js/class.js',
		'./js/module.js',
		'./js/loader.js',
		'./js/socketclient.js',
		'./js/main.js',
		'./js/website.js',
		'./js/cssLoader.js',
	],*/
	entry: [
		'./js/website.js',
		'./js/cssLoader.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'webpack.bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		},
		{
			test: /\.scss$/,
			loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
		}]
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: 'img/'
		}]),
		new ImageminPlugin({
			test: 'img/bigpngs2/**',
			optipng: {
				optimizationLevel: 5
			}
		})
	]
};