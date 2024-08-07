const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	context: __dirname,
	mode: 'development',
	entry: {
		header: {
			import: './modules/header/header.js',
			dependOn: 'shared'
		},
		body: {
			import: './modules/body/body.js',
			dependOn: 'shared'
		},
		footer: {
			import: './modules/footer/footer.js',
			dependOn: 'shared'
		},
		shared: ['jquery', 'lodash'],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: './public',
		},
		compress: true,
		port: 8564
	},
	plugins: [
		new HtmlWebpackPlugin({template: './index.html'}),
	 	new CleanWebpackPlugin()
	],
	optimization: {
		runtimeChunk: 'all'
	},
	performance: {
    maxAssetSize: 1000000, // 1 MB
    maxEntrypointSize: 1000000, // 1 MB
    }
		,
	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
			{
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
				type: 'asset/resource',
      },
			{
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'cache.jpg',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                // enabled: isProduction,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
}
