

require('dotenv').config()

const fs = require('fs')
const path = require('path')
const stats = require('recursive-stats')
const moment = require('moment')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack/config')

const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})

const app = express()
const compiler = webpack(config)


// TODO: only process.env.NODE_ENV !== 'production'
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'public')))

const contentPath = path.resolve('content')

const prepareContentFiles = (fileStat) => ({
  title: path.relative(contentPath, fileStat.path),
  content: md.render(fs.readFileSync(fileStat.path).toString().split('\n').slice(0, 12).join('\n')),
  date: moment(fileStat.ctime).calendar()
})

app.get('/api/articles', (req, res) => {
  stats(contentPath, (err, files) => {
    if (err) {
      console.log(err)
      return err
    }

    res.json({ articles: files.map(prepareContentFiles) })
  })
})


app.get('/api/article/:article_title', (req, res) => {
  fs.readFile(path.join(contentPath, req.params.article_title), (err, content) => {
    if (err) {
      console.log(err)
      return err
    }

    fs.stat(path.join(contentPath, req.params.article_title), (_err, fileStat) => {
      if (_err) {
        console.log(_err)
        return err
      }

      res.json({
        title: req.params.article_title,
        content: md.render(content.toString()),
        date: moment(fileStat.ctime).calendar()
      })
    })
  })
})


app.listen(process.env.NODE_PORT, () => {
  console.log(`Server started: http://localhost:${process.env.NODE_PORT}`) // eslint-disable-line no-console
})
