const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
	entry: {
		index: "./src/index.js",
		login: "./src/login.js",
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "js/[name].js",
	},
	module: {
		rules: [
			{
				test: /\.txt$/,
				use: "raw-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: require.resolve("jquery"),
				use: [
					{
						loader: "expose-loader",
						options: "$",
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/views/index.html",
			filename: "index.html",
			chunks: ["index"],
			hash: true,
			minify: {
				removeAttributeQuotes: true,
				removeComments: true,
				collapseWhitespace: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
			},
		}),
		new HtmlWebpackPlugin({
			filename: "login.html",
			template: "./src/views/login.html",
			hash: true,
			chunks: ["login"],
			minify: {
				removeAttributeQuotes: true,
				removeComments: true,
				collapseWhitespace: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
			},
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
	},
};

module.exports = config;
