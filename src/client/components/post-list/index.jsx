import React from 'react'
import {Link} from 'react-router-dom'

import s from './post-list-item.scss'
import Markdown from '../markdown'

const PostListItem = ({title, slug, entrance, createdAt, onClick}) => (
  <article className={s.post}>
    <header className={s.header}>
      <h2 className={s.title}>
        <Link to={`/posts/${slug}`} className={s.link}>{title}</Link>
      </h2>
      <aside className={s.date}>{createdAt}</aside>
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
