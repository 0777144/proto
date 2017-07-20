import React from 'react'

import PostListItem from './PostListItem'

const PostList = props => (
  <div>
    {props.posts.map(post =>
      <PostListItem
        {...post}
        key={post.slug}
      />
    )}
  </div>
)

export {PostList as default, PostListItem}
