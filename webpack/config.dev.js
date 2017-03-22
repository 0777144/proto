

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


const cssLoader = require('./css-loader.config')
// dist is for distribution (production) and contains minified code
// build contains code that is not minified and not ready for production deployment.
// TODO: maybe use build for development
const rootPath = path.resolve(process.cwd())
const buildPath = path.join(rootPath, 'public', 'build')
const distPath = path.join(rootPath, 'public', 'dist')


module.exports = {
   context: path.join(rootPath, 'src'),

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
    pathinfo: true, // TODO: remove for production
    // TODO: fix public path
    publicPath: 'http://localhost:3000/dist/',
    chunkFilename: '[id].js'
  },

  resolve: {
    modules: [
      path.join(rootPath, 'src'),
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
          path.join(rootPath, 'src')
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
    new CleanWebpackPlugin(distPath),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};
