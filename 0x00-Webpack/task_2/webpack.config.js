const path = require("path");

module.exports = {
	context: __dirname,
	mode: "production",
	entry: "/js/dashboard_main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
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
    ],
  },
}
