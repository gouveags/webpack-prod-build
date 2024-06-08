const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports.webpackDevelopment = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 3000,
  },
  plugins: [
    // http://localhost:3000/report.html
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
  ],
};
