
import {push} from 'react-router-redux'

import Request from 'superagent'

export const REQUEST_POSTS = 'REQUEST_POSTS'

export function requestPosts() {
  return {
    type: REQUEST_POSTS,
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts,
  }
}

export function fetchPosts() {
  return function (dispatch) {
    dispatch(requestPosts())

    Request
      .get('/api/posts')
      .then(data => data.body.posts)
      .then(posts => dispatch(receivePosts(posts)))
  }
}

export const REQUEST_POST = 'REQUEST_POST'

export function requestPost() {
  return {
    type: REQUEST_POST,
  }
}

export const RECEIVE_POST = 'RECEIVE_POST'

export function receivePost(post) {
  return {
    type: RECEIVE_POST,
    post: post,
  }
}

export function fetchPost(slug) {
  return function (dispatch) {
    dispatch(requestPost())

    Request
      .get(`/api/posts/${slug}`)
      .then(data => data.body.post)
      .then(post => dispatch(receivePost(post)))
  }
}

export function createPost(data) {
  return function (dispatch) {
    Request
      .post('/api/posts')
      .send({
        post: data
      })
      .then(data => data.body.post)
      .then(post => dispatch(push(`/posts/${post.slug}`)))
  }
}
