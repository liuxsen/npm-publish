const path = require('path')

const resolve = (p) => path.resolve(__dirname, '../', p)

module.exports = {
	entry: resolve('src'),
	output: {
		filename: 'bundle.js',
		path: resolve('dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader'
			]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [
				'file-loader'
			]
		}, {
			test: /\.(scv|tsv)$/,
			use: [
				'scv-loader'
			]
		}, {
			test: /\.xml$/,
			use: [
				'xml-loader'
			]
		}]
	}
}