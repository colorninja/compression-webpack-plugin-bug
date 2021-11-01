const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(baseConfig, {
    plugins: [
        new CompressionPlugin({
            test: /\.(js|css)$/,
            deleteOriginalAssets: true,
            minRatio: 1,
        }),
    ],
});