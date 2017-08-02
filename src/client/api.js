import Request from 'superagent'

export default class Api {
  constructor(base = '') {
    this.base = base
  }

  buildUrl(pathname) {
    return `${this.base}/api/${pathname}`
  }

  fetchPosts() {
    return Request
      .get(this.buildUrl('posts'))
      .then(data => data.body.posts)
  }

  fetchPost(slug) {
    return Request
      .get(this.buildUrl(`posts/${slug}`))
      .then(data => data.body.post)
  }

  createPost(data) {
    return Request
      .post(this.buildUrl('posts'))
      .send({
        post: data,
      })
      .then(response => response.body.post)
  }
}
