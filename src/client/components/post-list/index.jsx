import React from 'react'
import injectSheet from 'react-jss'

import Link from '../link'
import Markdown from '../markdown'
import styles from './styles'

// TODO: Как тут использовать styled-jss?? Тут же вложенные элементы и идет завязка на  классы

const PostListItem = ({
  title,
  slug,
  classes,
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

const StyledPostListItem = injectSheet(styles)(PostListItem)

const PostList = props => (
  <div>
    {props.posts.map(post =>
      <StyledPostListItem
        {...post}
        key={post.slug}
      />
    )}
  </div>
)

export {PostList as default, StyledPostListItem as PostListItem}
