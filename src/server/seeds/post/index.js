import fs from 'fs'
import path from 'path'
import cuid from 'cuid'
import slug from 'limax'
import stats from 'recursive-stats'

import markdownToHtml from '../../util/markdownToHtml'
import Post from '../../models/post'

const contentPath = path.resolve(__dirname, 'content')

export default function () {
  Post.count().exec((execError, count) => {
    if (execError) {
      console.log(execError) // eslint-disable-line no-console
      return
    }

    if (count > 0) {
      return
    }

    stats(contentPath, (statsError, files) => {
      if (statsError) {
        console.log(statsError) // eslint-disable-line no-console
        return
      }

      const posts = files.map(fileStat => {
        const title = path.basename(fileStat.path, '.md')
        const sourceContent = fs.readFileSync(fileStat.path).toString()
        const content = markdownToHtml(sourceContent)

        return new Post({
          title,
          entrance: content.split('\n').slice(0, 12).join('\n'),
          sourceContent,
          content,
          slug: slug(title, {lowercase: true}),
          cuid: cuid(),
        })
      })

      Post.create(posts, createError => {
        if (createError) {
          console.log(createError) // eslint-disable-line no-console
        }
      })
    })
  })
}

