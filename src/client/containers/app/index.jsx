

import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router'

import './app.scss'
import 'styles/icon'

import history from '../../history'
import configureStore from '../../store/configureStore'
import Layout from '../../components/layout'
import PagePosts from '../../pages/PagePosts'
import PagePost from '../../pages/PagePost'
import PagePostCreate from '../../pages/PagePostCreate'

const store = configureStore()

const App = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Route exact path="/" component={PagePosts}/>
        <Route path="/posts/:slug" component={PagePost}/>
        <Route path="/post/create" component={PagePostCreate}/>
      </Layout>
    </ConnectedRouter>
  </Provider>
)

export default App
