const webpack = require('webpack');

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: '../../index.html',
	inject: 'body'
});

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, './dist/js'),
		filename: 'app.bundle.js',
		publicPath: '/dist/js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	},
	plugins: [HtmlWebpackPluginConfig],
	devtool: 'source-map'
};

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new UglifyJsPlugin({sourceMap: true}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	);
}