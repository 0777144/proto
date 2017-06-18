

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_POST,
  RECEIVE_POST,
} from '../actions'

function posts(state = {
  isFetching: false,
  items: [],
}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
      })
    default:
      return state
  }
}

function post(state = {
  isFetching: false,
  data: {},
}, action) {
  switch (action.type) {
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.post,
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  router: routerReducer,
  posts,
  post,
})

export default rootReducer
