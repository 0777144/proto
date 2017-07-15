export default{
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    camelCase: true,
    localIdentName: '[name]__[local]___[hash:base64:5]',
    importLoaders: 1
  }
}
