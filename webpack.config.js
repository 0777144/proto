

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        app: './app/index.jsx'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public', 'dist'),
        //pathinfo: true, // TODO: remove for production
        //publicPath: '/dist/',
        chunkFilename: '[id].js'
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
            '.scss',
            '.css',
            '.svg',
            '.font.js'
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
                    /node_modules/
                ],
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use:  ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                                camelCase: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                importLoaders: 1
                            }
                        },
                        {
                            loader:'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use:  ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                                camelCase: true,
                                localIdentName: '[name]__[local]', // [name]__[local]___[hash:base64:5]
                                importLoaders: 1
                            }
                        },
                        {
                            loader:'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader:'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.svg/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]' // [name]___[hash:base64:5].[ext]
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                {removeTitle: true},
                                {convertColors: {shorthex: false}},
                                {convertPathData: false}
                            ]
                        }
                    }
                ]
            },
            // TODO: icon fonts ar icon sprites
            {
                test: /\.font.js$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'fontgen-loader?embed'
                    ]
                })
            },
        ]
    },

    devtool: 'source-map',

    plugins: [
        new ExtractTextPlugin('[name].bundle.css')
    ]
};
