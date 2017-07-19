import React from 'react'

import Link from '../components/link'
import Icon from '../components/icon'
import Page from '../components/page'
import PostListContainer from '../containers/post-list'

const iconCreate = <Link clear to='/post/create'><Icon type='edit'/></Link>

const PagePosts = () => (
  <Page
    title="Posts"
    header={iconCreate}
  >
    <PostListContainer/>
  </Page>
)

export default PagePosts
