const { merge } = require("webpack-merge");
const { webpackDevelopment } = require("./webpack.dev");
const { webpackCommon } = require("./webpack.common");

console.log(
  `-------------- webpack using mode ${
    process.env.NODE_ENV || "development"
  } to build ---------------\n`
);

module.exports = merge(webpackCommon, webpackDevelopment);
