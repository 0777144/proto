

import React from 'react'
import {Link} from 'react-router-dom'

import Button from '../components/button'
import Page from '../components/page'
import PostListContainer from '../containers/post-list'

const iconCreate = <Button type='icon' to='/post/create' className='icon-edit'/>

const PagePosts = () => (
  <Page
    title="Posts"
    header={iconCreate}
  >
    <PostListContainer/>
  </Page>
)

export default PagePosts
