import React from 'react'

import s from './post.scss'
import Markdown from '../markdown'

const Post = ({title, content, createdAt, onClick}) => (
  <article className={s.post}>
    <header className={s.header}>
      <h2 className={s.title}>{title}</h2>
      <aside className={s.date}>{createdAt}</aside>
    </header>
    <Markdown content={content}/>
  </article>
)

export default Post
