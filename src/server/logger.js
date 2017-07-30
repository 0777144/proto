/* eslint-disable no-console */

import chalk from 'chalk'
import ip from 'ip'

export default {

  // Called whenever there's an error on the server we want to print
  error: err => {
    console.error(chalk.red(err))
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host) => {
    console.log([
      'Server started!',
      `Localhost: ${chalk.magenta.bold(`http://${host}:${port}`)}`,
      `      LAN: ${chalk.magenta.bold(`http://${ip.address()}:${port}`)}`,
    ].join('\n'))
  },
}
