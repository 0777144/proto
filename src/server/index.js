

import fs from 'fs'
import path from 'path'
import stats from 'recursive-stats'
import moment from 'moment'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack/config'
import markdownIt from 'markdown-it'

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true
})

const app = express()

// Run Webpack dev server in development mode
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
  app.use(webpackHotMiddleware(compiler))
}
app.use(express.static(path.join(process.cwd(), 'public')))

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

app.all(/^\/articles\/.*/, function (req, res) {
  res.sendFile(path.resolve('./public/index.html'))
})


app.listen(process.env.NODE_PORT, () => {
  console.log(`Server started: http://localhost:${process.env.NODE_PORT}`) // eslint-disable-line no-console
})
