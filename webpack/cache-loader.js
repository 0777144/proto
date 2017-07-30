import path from 'path'

export default {
  loader: 'cache-loader',
  options: {
    cacheDirectory: path.resolve('node_modules/.cache/.cache-loader'),
  },
}
