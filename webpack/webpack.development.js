const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const webpackDevelopment = () => {


    return {
        mode: "development",
        plugins: [
            new BundleAnalyzerPlugin()
        ]
    };
};

module.exports={
    webpackDevelopment,
};