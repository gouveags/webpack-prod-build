

const path = require('node:path');
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ProvidePlugin, ProgressPlugin} = require("webpack");
const { webpackDevelopment } = require("./webpack/webpack.development");
const { webpackProduction } = require("./webpack/webpack.production");

console.log(`-------------- webpack using mode ${process.env.NODE_ENV} to build ---------------\n`);

const config = () =>  {

    if (process.env.NODE_ENV === "development") return  webpackDevelopment();
    
    return webpackProduction();
};

const webpackCommon = () => {


    return {
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'), 
            filename: "[name].js",
        },
        module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                  },
                },
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
              {
               test:  /\.svg$/,
               use: ["@svgr/webpack"]    
              }
            ],
        },
        resolve: {
            extensions: [".js", ".jsx" ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                filename: "./index.html",
              }),
              new ProvidePlugin({"React": "react"}),
              new ProgressPlugin(),
        ]
    };
};

module.exports = merge(webpackCommon(), config());

// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };