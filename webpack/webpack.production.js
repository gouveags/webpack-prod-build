const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const webpackProduction = () => {


    return {
        mode: "production",
        devtool: "source-map",
        plugins: [
            new BundleAnalyzerPlugin()
        ]
    };
};
module.exports={
    webpackProduction,
};