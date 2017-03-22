
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./config.dev')
} else {
  module.exports = require('./config.dev')
}
