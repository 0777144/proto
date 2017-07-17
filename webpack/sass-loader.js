const sass = require('node-sass')
const importer = require('node-sass-import')
console.log('req SASsssss');

module.exports = (data, file) => {
  console.log('SASsssss');
  try {
    return sass.renderSync({data, file, importer}).css.toString('utf8')
  } catch (e) {
    console.log('SASsssss ERR');
    console.error('SASsssss ERR');
    console.error(e)
  }
}
