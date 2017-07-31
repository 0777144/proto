export default {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      'react',
      'stage-3',
      // TODO: use env preset instead
      ['es2015', {modules: false}],
    ],
    plugins: [
      'transform-runtime',
      'react-hot-loader/babel',
    ],
  },
}
