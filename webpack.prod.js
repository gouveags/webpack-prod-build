const { merge } = require("webpack-merge");
const { webpackCommon } = require("./webpack.common");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const webpackProduction = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "bundle-report.html",
    }),
  ],
};

module.exports = merge(webpackCommon, webpackProduction);
