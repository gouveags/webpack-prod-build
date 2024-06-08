const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin, ProgressPlugin } = require("webpack");

module.exports.webpackCommon = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    // faz com que possa ser importado o arquivo sem a necessidade de colocar .js ou .jsx no final da importação
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/favicon.ico"),
      filename: "./index.html",
    }),
    new ProvidePlugin({ React: "react" }),
    new ProgressPlugin(),
  ],
};
