import React from 'react'
import {Route} from 'react-router'
import {ThemeProvider} from 'react-jss'

import 'styles/reset.css'
import 'styles/index.css'
import 'styles/icon.font.js'

import Layout from './layout'
import PagePosts from '../pages/PagePosts'
import PagePost from '../pages/PagePost'
import PagePostCreate from '../pages/PagePostCreate'

const App = () => (
  <Layout>
    <Route exact path="/" component={PagePosts}/>
    <Route path="/posts/:slug" component={PagePost}/>
    <Route path="/post/create" component={PagePostCreate}/>
  </Layout>
)

export default App
