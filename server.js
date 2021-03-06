/* eslint-disable global-require */

require('dotenv').config()

if (process.env.NODE_ENV === 'production') {
  // TODO: сборка для проды
  // process.env.webpackAssets = JSON.stringify(require('./dist/manifest.json'));
  // process.env.webpackChunkAssets = JSON.stringify(require('./dist/chunk-manifest.json'));
  // In production, serve the webpacked server file.
  // require('./dist/server.bundle.js');
} else {
  require('babel-register')({
    cache: true,
    presets: [
      'react',
      'stage-3',
    ],
    plugins: [
      'transform-es2015-modules-commonjs',
      [
        'css-modules-transform', {
          generateScopedName: '[name]__[local]___[hash:base64:5]',
          processorOpts: {parser: require('postcss-scss').parse},
          extensions: [
            '.css',
            '.scss',
          ],
        },
      ],
    ],
  })
  require('./src/server/index')
}
