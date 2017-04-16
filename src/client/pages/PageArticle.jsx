

import React from 'react'

import Page from 'components/page'
import ArticleContainer from 'containers/article'

const PageArticle = ({match}) => (
  <Page title="Article">
    <ArticleContainer title={match.params.title}/>
  </Page>
)

export default PageArticle
