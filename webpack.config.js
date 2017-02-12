

const path = require('path');

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
            '.json'
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
            }
        ]
    }
};
