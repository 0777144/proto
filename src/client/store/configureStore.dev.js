

import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'
import history from '../history'

import rootReducer from '../reducers'

const configureStore = preloadedState => {
  const logger = createLogger()
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(routerMiddleware(history), logger)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
