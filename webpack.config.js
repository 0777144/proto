

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    entry: {
        home: './app/home',
        about: './app/about'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public', 'dist'),
        pathinfo: true
    },

    resolve: {
        modules: [
            path.resolve(__dirname, 'app'),
            path.resolve(__dirname, 'node_modules')
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        //new webpack.optimize.CommonsChunkPlugin({
        //    name: 'common'
        //}),
        new CleanWebpackPlugin(path.resolve(__dirname, 'public', 'dist'))
    ],

    devtool: 'source-map'
};
