import React from 'react'

import withStyles from '../../styles/withStyles'
import Markdown from '../markdown'
import styles from './styles.scss'

const Post = ({
  classes,
  title,
  content,
  createdAt,
  onClick,
}) => (
  <article className={classes.post}>
    <header className={classes.header}>
      <h2 className={classes.title}>{title}</h2>
      <aside className={classes.date}>{createdAt}</aside>
    </header>
    <Markdown content={content}/>
  </article>
)

export default withStyles(styles)(Post)
