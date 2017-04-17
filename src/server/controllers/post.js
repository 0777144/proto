

import cuid from 'cuid'
import sanitizeHtml from 'sanitize-html'

import markdownToHtml from '../util/markdownToHtml'
import Post from '../models/post'

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  Post.find().sort('-createdAt').exec((err, posts) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({posts})
  })
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end()
  }

  const newPost = new Post(req.body.post)

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title)
  newPost.sourceContent = sanitizeHtml(newPost.sourceContent)
  newPost.content = markdownToHtml(newPost.sourceContent)

  //newPost.slug = slug(newPost.title.toLowerCase(), {lowercase: true})
  newPost.cuid = cuid()
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({post: saved})
  })
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({slug: req.params.slug}).exec((err, post) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({post})
  })
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({slug: req.params.slug}).exec((err, post) => {
    if (err) {
      res.status(500).send(err)
    }

    post.remove(() => {
      res.status(200).end()
    })
  })
}
