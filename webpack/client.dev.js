import path from 'path'
import webpack from 'webpack'
import moment from 'moment'
import chalk from 'chalk'
import AutoDllPlugin from 'autodll-webpack-plugin'
import CleanTerminalPlugin from 'clean-terminal-webpack-plugin'

import logger from '../tools/logger'
import babelLoader from './babel-loader'
// TODO: А cache-loader точно нужен, сделать бенчмарк
import cacheLoader from './cache-loader'
import cssLoader from './css-loader'
import postcssLoader from './postcss-loader'

const rootPath = path.resolve(process.cwd())
const distPath = path.join(rootPath, 'public', 'dist')
const clientPath = path.join(rootPath, 'src', 'client')
const publicPath = '/dist/'

export default {
  cache: true,

  // The base directory, an absolute path, for resolving entry points and
  // loaders from configuration.
  context: clientPath,

  entry: {
    app: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      '../../tools/dev-console.js',
      './index.js',
    ],
  },

  output: {
    filename: '[name].bundle.js',

    // The output directory as an absolute path.
    path: distPath,

    // This option specifies the public URL of the output directory
    // when referenced in a browser.
    publicPath,
    chunkFilename: '[id].js',
  },

  resolve: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // Keep in sync with .flowconfig and .eslintrc
    modules: [
      clientPath,
      'node_modules',
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
        // TODO: нужен ли тут exclude, если выше есть include?
        exclude: [
          /node_modules/,
        ],
        use: [
          cacheLoader,
          babelLoader,
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          cacheLoader,
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
    new webpack.NamedModulesPlugin(),
    // new CleanTerminalPlugin(),
    function () {
      this.plugin('done', () => {
        logger.appStarted(process.env.NODE_PORT, process.env.NODE_HOST)
        logger.log(chalk.cyan('Build completed at'), chalk.cyan.bold(moment().format('HH:mm:ss')))
      })
    },
  ],
}
