

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATH_BASE = path.resolve(__dirname, '../');

// dist is for distribution (production) and contains minified code
// build contains code that is not minified and not ready for production deployment.
// TODO: maybe use build for development
// const buildPath = path.join(PATH_BASE, 'public', 'build');
const distPath = path.join(PATH_BASE, 'public', 'dist');


module.exports = {
  // context: path.join(PATH_BASE, 'src'),

  entry: {
    app: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index.jsx'
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: distPath,
        // pathinfo: true, // TODO: remove for production
    publicPath: '/dist/',
    chunkFilename: '[id].js'
  },

  resolve: {
    modules: [
      path.join(PATH_BASE, 'src'),
      path.join(PATH_BASE, 'node_modules')
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
          path.join(PATH_BASE, 'src')
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
        use: ExtractTextPlugin.extract({
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
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
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
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
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
      }
    ]
  },

  devtool: 'cheap-inline-source-map',

  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(distPath)
  ]
};
