const path = require('path');
const {WebpackManifestPlugin} = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve('src', 'index.js'),
    mode: 'production',

    output: {
        // pwd is root folder
        path: path.resolve('dist'),
        publicPath: '/',
        filename: 'main.[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {url: false}},
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        new WebpackManifestPlugin({
            fileName: 'build-manifest.json'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.[chunkhash].css',
        })
    ],
};
