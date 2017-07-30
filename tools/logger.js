/* eslint-disable no-console */

import chalk from 'chalk'
import ip from 'ip'

export default {
  log: (...args) => {
    console.log(...args)
  },
  // Called whenever there's an error on the server we want to print
  error: err => {
    console.error(chalk.red(err))
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host = 'localhost') => {
    console.log([
      `Localhost: ${chalk.magenta.bold(`http://${host}:${port}`)}`,
      `      LAN: ${chalk.magenta.bold(`http://${ip.address()}:${port}`)}`,
    ].join('\n'))
  },
}
