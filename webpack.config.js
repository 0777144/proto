

const path = require('path');

module.exports = {

    entry: {
        app: './app/index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public', 'dist')
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
                use: [
                    {
                        loader: 'log-loader',
                        options: {
                            id: 1
                        }
                    },
                    {
                        loader: 'log-loader',
                        options: {
                            id: 2
                        }
                    }
                ]
            }
        ]
    }
};
