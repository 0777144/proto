import React from 'react'

import Markdown from '../markdown'
import styles from './styles'

const Post = ({
  title,
  content,
  createdAt,
  onClick,
}) => (
  <article className={styles.post}>
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <aside className={styles.date}>{createdAt}</aside>
    </header>
    <Markdown content={content}/>
  </article>
)

export default Post
