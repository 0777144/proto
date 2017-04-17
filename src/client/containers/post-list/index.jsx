

import React from 'react'
import {Link} from 'react-router-dom'
import Request from 'superagent'

import s from './../../containers/post-list/post-list-item.scss'
import {markdown} from '../../styles/markdown.scss'

function createMarkup(html) {return {__html: html}}

const PostListItem = ({title, slug, entrance, createdAt, onClick}) => (
  <article className={s.post}>
    <header className={s.header}>
      <h2 className={s.title}>
        <Link to={`/posts/${slug}`} className={s.link} onClick={onClick}>{title}</Link>
      </h2>
      <aside className={s.date}>{createdAt}</aside>
    </header>
    <section className={markdown} dangerouslySetInnerHTML={createMarkup(entrance)} />
  </article>
)

const PostList = (props) => (
  <div>
    {props.posts.map((post) =>
      <PostListItem
        {...post}
        key={post.title}
      />
    )}
  </div>
)

class PostListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    Request.get('/api/posts')
      .then(data => data.body.posts)
      .then(posts => this.setState({posts}));
  }

  render() {
    return (
      <PostList {...this.state}/>
    );
  }
}

export {PostListContainer as default, PostList, PostListItem}
