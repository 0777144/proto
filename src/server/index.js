

import path from 'path'
import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../../webpack/config'
import router from './router'
import seed from './seeds'

const app = express()

// Run Webpack dev server in development mode
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
  app.use(webpackHotMiddleware(compiler))
}

// Set native promises as mongoose promise
mongoose.Promise = global.Promise

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!') // eslint-disable-line no-console
    throw error
  }

  // feed some dummy data in DB.
   seed()
})

// Apply body Parser and server public assets and routes
app.use(compression())

app.use(express.static(path.join(process.cwd(), 'public')))

app.use(bodyParser.json({limit: '20mb'}))
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}))

app.use('/api', router)

app.use((req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
})

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server started: http://localhost:${process.env.NODE_PORT}`) // eslint-disable-line no-console
})
