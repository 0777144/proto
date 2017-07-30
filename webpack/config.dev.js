import path from 'path'
import webpack from 'webpack'
import moment from 'moment'
import chalk from 'chalk'
import AutoDllPlugin from 'autodll-webpack-plugin'

import cssLoader from './css-loader'
import postcssLoader from './postcss-loader'

const rootPath = path.resolve(process.cwd())
const distPath = path.join(rootPath, 'public', 'dist')
const clientPath = path.join(rootPath, 'src', 'client')
const publicPath = '/dist/'

export default {
  cache: true,
  context: clientPath,

  entry: {
    app: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './index.jsx',
    ],
  },

  output: {
    filename: '[name].bundle.js',
    path: distPath,
    pathinfo: true,
    publicPath,
    chunkFilename: '[id].js',
  },

  resolve: {
    modules: [
      clientPath,
      path.join(rootPath, 'node_modules'),
    ],
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.scss',
      '.css',
      '.svg',
    ],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          clientPath,
        ],
        exclude: [
          /node_modules/,
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                'react',
                'stage-3',
                ['es2015', {modules: false}],
              ],
              plugins: [
                'transform-runtime',
                'react-hot-loader/babel',
              ],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          cssLoader,
          postcssLoader,
        ],
      },
      {
        test: /\.svg/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // [name]___[hash:base64:5].[ext]
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeTitle: true},
                {convertColors: {shorthex: false}},
                {convertPathData: false},
              ],
            },
          },
        ],
      },
      // TODO: icon fonts vs icon sprites
      {
        test: /\.font.js$/,
        use: [
          'style-loader',
          'css-loader',
          'fontgen-loader?embed',
        ],
      },
    ],
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new AutoDllPlugin({
      debug: true,
      context: rootPath,
      filename: '[name].dll.js',
      entry: {
        vendor: [
          'babel-polyfill',
          'classnames',
          'history',
          'moment',
          'prop-types',
          'react',
          'react-dom',
          'react-redux',
          'react-router',
          'react-router-dom',
          'react-router-redux',
          'recompose',
          'redux',
          'redux-logger',
          'redux-thunk',
          'superagent',
        ],
      },
      plugins: [
        new webpack.ContextReplacementPlugin(
          // The path to directory which should be handled by this plugin
          /moment[/\\]locale/,
          // A regular expression matching files that should be included
          /(en-gb|ru)\.js/,
        ),
      ],
    }),
    function () {
      this.plugin('done', () => console.log(chalk.cyan('Build ended:'), chalk.cyan.bold(moment().format('HH:mm:ss')))) // eslint-disable-line no-console
    },
  ],
}
