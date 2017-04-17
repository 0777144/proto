

import React from 'react'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter as Router, routerReducer, routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

//import reducers from 'reducers'

import './app.scss'
import 'styles/icon'

import Layout from 'components/layout'
import PagePosts from 'pages/PagePosts'
import PagePost from 'pages/PagePost'

const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    //...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

const App = (props) => (
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Route exact path="/" component={PagePosts}/>
        <Route path="/posts/:slug" component={PagePost}/>
      </Layout>
    </Router>
  </Provider>
)

export default App
