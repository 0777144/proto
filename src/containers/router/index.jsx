

import matchPath from '../../utils/matchPath'
import React from 'react'
import Request from 'superagent'

import './app.scss'
import '../../styles/icon'

import History from '../../history'

import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Logo from '../../components/logo'
import Link from '../../components/link'
import Page from '../../components/page'
import ArticleContainer from '../../containers/article'
import ArticleListContainer from '../../containers/article-list'

import {icon as navIcon} from '../../components/footer/footer.scss'

const routes = [
  {
    pattern: '/',
    title: 'Articles',
    MainComponent: ArticleListContainer
  },
  {
    pattern: '/articles/:articleId',
    title: (article) => article.title,
    MainComponent: ArticleContainer
  }
]

class Router extends React.Component {
  render() {
    return (
      this.state.component
    )
  }
}
