import path from 'path'
import webpack from 'webpack'
import moment from 'moment'
import AutoDllPlugin from 'autodll-webpack-plugin'
import precss from 'precss'

import cssLoader from './css-loader.config'

const rootPath = path.resolve(process.cwd())
const distPath = path.join(rootPath, 'public', 'dist')
const clientPath = path.join(rootPath, 'src', 'client')
const publicPath = `http://localhost:${process.env.NODE_PORT}/dist/`

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    parser: 'postcss-scss',
    plugins: [
      precss({
        import: {
          extension: '.scss'
        }
      }),
      require('autoprefixer')(),
    ],
  }
}

export default {
  context: clientPath,

  entry: {
    app: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      'react-hot-loader/patch',
      './index.jsx',
    ]
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
      '.font.js',
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
        test: /\.css$/,
        use: [
          'style-loader',
          cssLoader,
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')(),
              ],
            }
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          cssLoader,
          postCssLoader,
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

  devtool: 'source-map',

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
          'react',
          'react-dom',
          'moment',
        ],
      },
    }),
    function() {
      this.plugin('done', () => console.log('Build ended:', moment().format('HH:mm:ss')));
    },
  ]
}
