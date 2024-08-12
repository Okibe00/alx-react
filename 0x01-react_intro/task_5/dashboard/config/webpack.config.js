const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname,'src/index.js'),
	devtool: 'inline-source-map',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '../dist'),
		},
		hot: true,
		open: true
	},
	module: {
		rules:[
			{
				test: /\.css$/,
				use: [ 'style-loader','css-loader']
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						},
					},
				],
			}
		]
	}
}
