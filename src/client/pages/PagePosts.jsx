

import React from 'react'
import {Link} from 'react-router-dom'

import Page from 'components/page'
import PostListContainer from 'containers/post-list'

const iconCreate = <Link to='/post/create' className='icon-edit'/>

const PagePosts = () => (
  <Page
    title="Posts"
    header={iconCreate}
  >
    <PostListContainer/>
  </Page>
)

export default PagePosts
