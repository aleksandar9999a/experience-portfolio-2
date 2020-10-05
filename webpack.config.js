const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			},
			{
                test: /\.(png|jpe?g|svg)$/,
                loader: 'file-loader'
            }
		]
	},
	devServer: {
		historyApiFallback: true,
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			favicon: './public/favicon.png'
		})
	]
};