/* eslint-disable */

const postcss = require('postcss')


// module.exports = data =>
//   postcss().process(data, { parser }).then(res => postcssJs.objectify(res.root))

module.exports = data =>
  postcss([
    require('precss')({
      import: {
        extension: '.scss',
      },
    })
  ])
  .process(data, {parser: require('postcss-scss')})
  .then(function (result) {
    console.log('\n\nresult:\n', result, '\n\n')
    // do something with result.css
    return result
  })
  .catch(err => {
    console.log('\n\nerr:\n', err, '\n\n')

    throw err
  });
