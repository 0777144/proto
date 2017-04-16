

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cssLoader = require('./css-loader.config')

const rootPath = path.resolve(process.cwd())
const distPath = path.join(rootPath, 'public', 'dist')
const clientPath = path.join(rootPath, 'src', 'client')
const publicPath = `http://localhost:${process.env.NODE_PORT}/dist/`

module.exports = {
  context: clientPath,

  entry: {
    app: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      'react-hot-loader/patch',
      './index.jsx'
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: distPath,
    pathinfo: true,
    publicPath,
    chunkFilename: '[id].js'
  },

  resolve: {
    modules: [
      clientPath,
      path.join(rootPath, 'node_modules')
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
          clientPath
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
        use: [
          'style-loader',
          cssLoader,
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          cssLoader,
          'postcss-loader',
          'sass-loader'
        ]
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
      // TODO: icon fonts vs icon sprites
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};
