const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	context: __dirname,
	mode: "development",
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 8564
	},
	entry: {
			header: {
				import: path.join(__dirname, "modules/header/header.js"),
				dependOn: "shared"
			},
			body: {
				import: path.join(__dirname, "modules/body/body.js"),
				dependOn: "shared"
			},
			footer: {
				import: path.join(__dirname, "modules/footer/footer.js"),
				dependOn: "shared"
			},
		shared: ["jquery", "lodash"],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, "public"),
	},
	plugins: [new HtmlWebpackPlugin({
		template: "./index.html"
	}), new CleanWebpackPlugin()],
	optimization: {
		runtimeChunk: "all"
	},
	devtool: "inine-source-map",
	performance: {
    maxAssetSize: 1000000, // 1 MB
    maxEntrypointSize: 1000000, // 1 MB
    }
		,
	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
