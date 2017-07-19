import React from 'react'

import Link from '../link'
import Markdown from '../markdown'
import styles from './styles'

const PostListItem = ({
  title,
  slug,
  entrance,
  createdAt,
  onClick,
}) => (
  <article className={styles.post}>
    <header className={styles.header}>
      <h2 className={styles.title}>
        <Link to={`/posts/${slug}`}>{title}</Link>
      </h2>
      <aside className={styles.date}>{createdAt}</aside>
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
