

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './app.scss'
import '../../styles/icon'

import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Logo from '../../components/logo'
import Page from '../../components/page'
import ArticleContainer from '../../containers/article'
import ArticleListContainer from '../../containers/article-list'

import {icon as navIcon} from '../../components/footer/footer.scss'

const PageArticle = ({match}) => (
  <Page title={match.params.title}>
    <ArticleContainer title={match.params.title} />
  </Page>
)

const PageArticleNew = ({match}) => (
  <Page title="New article">
    NEW!
  </Page>
)

const PageArticleList = () => (
  <Page title="Articles">
    <ArticleListContainer/>
  </Page>
)


const App = (props) => (
  <Router>
    <div>
      <Nav>
        <Link to="/"><Logo/></Link>
      </Nav>

      <Route exact path="/" component={PageArticleList}/>
      <Route path="/articles/:title" component={PageArticle}/>

      <Footer>
        <Link className={navIcon} to='https://github.com/0777144/proto' target='_blank' rel='noopener noreferrer'><i className='icon-github' /></Link>
      </Footer>
    </div>
  </Router>
)

export default App
