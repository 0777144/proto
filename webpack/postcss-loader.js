import precss from 'precss'
import autoprefixer from 'autoprefixer'

export default {
  loader: 'postcss-loader',
  options: {
    parser: 'postcss-scss',
    plugins: [
      precss({
        import: {
          extension: '.scss',
        },
      }),
      autoprefixer(),
    ],
  },
}
