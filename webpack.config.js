var path = require('path');

module.exports = {

    entry: {
        app: './app/index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public', 'dist')
    }
};
