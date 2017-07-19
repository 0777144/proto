import React from 'react'

import Page from '../components/page'
import PostContainer from '../containers/post'

const PagePost = ({match}) => (
  <Page title="Post">
    <PostContainer slug={match.params.slug}/>
  </Page>
)

export default PagePost
