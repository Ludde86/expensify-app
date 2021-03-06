const path = require('path');

// entry poiont -> where our application kick of (app.js)
// output the final bundle file (javascript file that contains everything our app needs to run)

// the absolute path to our apllication
// join together two paths -> path to our app + public folder
module.exports = {
	entry: './src/playground/redux-101.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true
	}
};

// loader - customize the behavior of webpack, when it loads a given file
// setup the loader (from babel)
