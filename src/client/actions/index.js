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
    posts,
  }
}

export function fetchPosts() {
  return function (dispatch, getState, Api) {
    dispatch(requestPosts())

    Api
      .fetchPosts()
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
    post,
  }
}

export function fetchPost(slug) {
  return function (dispatch, getState, Api) {
    dispatch(requestPost())

    Api
      .fetchPost(slug)
      .then(post => dispatch(receivePost(post)))
  }
}

export function createPost(data) {
  return function (dispatch, getState, Api) {
    Api
      .createPost(data)
      .then(post => dispatch(push(`/posts/${post.slug}`)))
  }
}
