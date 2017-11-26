import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import enableBatching from './enableBatching'
import posts from './posts'
import post from './post'

const rootReducer = combineReducers({
  router: routerReducer,
  posts,
  post,
})

export default enableBatching(rootReducer)
