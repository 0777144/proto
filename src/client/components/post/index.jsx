

import React from 'react'

import s from './post.scss'
import {markdown} from '../../styles/markdown.scss'

function createMarkup(html) {return {__html: html}}

const Post = ({title, content, createdAt, onClick}) => (
  <article className={s.post}>
    <header className={s.header}>
      <h2 className={s.title}>{title}</h2>
      <aside className={s.date}>{createdAt}</aside>
    </header>
    <section className={markdown} dangerouslySetInnerHTML={createMarkup(content)} />
  </article>
)

export default Post
