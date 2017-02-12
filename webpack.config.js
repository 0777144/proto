

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        app: './app/index.jsx'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public', 'dist')
    },

    resolve: {
        modules: [
            path.resolve(__dirname, 'app'),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.css'
        ]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'app'),
                    path.resolve(__dirname, 'components')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:  ExtractTextPlugin.extract({
                    use: {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            camelCase: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                })
            },
            {
                test: /\.svg/,
                loader: 'file-loader',
                options: {
                    name: '[name]___[hash:base64:5].[ext]'
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].bundle.css')
    ]
};
