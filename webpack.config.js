const path = require('path');

module.exports = {
	//entry: './js/test.js',
	entry: './js/cssLoader.js',
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
	}
};