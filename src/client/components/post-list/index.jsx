import React from 'react'
import {Link} from 'react-router-dom'

import Markdown from '../markdown'
import style from './style'

const PostListItem = ({
  title,
  slug,
  entrance,
  createdAt,
  onClick,
}) => (
  <article className={style.post}>
    <header className={style.header}>
      <h2 className={style.title}>
        <Link to={`/posts/${slug}`} className={style.link}>{title}</Link>
      </h2>
      <aside className={style.date}>{createdAt}</aside>
    </header>
    <Markdown content={entrance}/>
  </article>
)

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
