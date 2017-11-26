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
