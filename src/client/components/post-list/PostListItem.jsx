import React from 'react'

import withStyles from '../../styles/withStyles'
import Link from '../link'
import Markdown from '../markdown'
import styles from './styles'

const PostListItem = ({
  classes,
  title,
  slug,
  entrance,
  createdAt,
  onClick,
}) => (
  <article className={classes.post}>
    <header className={classes.header}>
      <h2 className={classes.title}>
        <Link to={`/posts/${slug}`}>{title}</Link>
      </h2>
      <aside className={classes.date}>{createdAt}</aside>
    </header>
    <Markdown content={entrance}/>
  </article>
)

export default withStyles(styles)(PostListItem)
