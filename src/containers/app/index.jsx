

import React from 'react'
import Request from 'superagent'

import './app.scss'
import '../../styles/icon'

import History from '../../history'

import Nav from '../../components/nav'
import Logo from '../../components/logo'
import Link from '../../components/link'
import Page from '../../components/page'
import Article from '../../components/article'
import ArticleList from '../../components/article-list'

import {icon as navIcon} from '../../components/nav/nav.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: (
        <Page title='Articles'>
          <ArticleList/>
        </Page>
      )
    }
  }

  componentDidMount() {
    // Инициализируем историю
    History.replace('/', {article: {date:'',title:'',content:''}})

    History.listen(location => {
      console.info('location changed:', location)

      if (/article/.test(location.pathname)) {
        const articleTitle = location.pathname.split('/').pop()

        Request.get(`/api/article/${articleTitle}`)
          .then(data => data.body)
          .then(a => {
            this.setState({
              page: (
                <Page title={a.title}>
                  <Article
                    date={a.date}
                    content={a.content}
                  />
                </Page>
              )
            })
          })
      } else {
        this.setState({
          page: (
            <Page title='Articles'>
              <ArticleList/>
            </Page>
          )
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Nav>
          <Logo to="/"/>
          <Link className={navIcon} to='https://github.com/0777144/proto' target='_blank' rel='noopener noreferrer'><i className='icon-github' /></Link>
        </Nav>

        {this.state.page}
      </div>
    );
  }
}
