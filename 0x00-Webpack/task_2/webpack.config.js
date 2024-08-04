const path = require("path");

module.exports = {
	context: __dirname,
	mode: "production",
	entry: "/js/dashboard_main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
		assetModuleFilename: 'assets/logo.jpg'
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
