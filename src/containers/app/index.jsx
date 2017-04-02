

import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './app.scss'
import 'styles/icon'

import Layout from 'components/layout'
import PageArticleList from 'pages/PageArticleList'
import PageArticle from 'pages/PageArticle'

const App = (props) => (
  <Router>
    <Layout>
      <Route exact path="/" component={PageArticleList}/>
      <Route path="/articles/:title" component={PageArticle}/>
    </Layout>
  </Router>
)

export default App
