

import React from 'react'
import Request from 'superagent'
import {Link} from 'react-router-dom'

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
);

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props
  }

  componentWillMount() {
    Request.get(`/api/posts/${this.state.slug}`)
      .then(data => data.body.post)
      .then(post => this.setState(post))
  }

  render() {
    return (
      <Post {...this.state}/>
    );
  }
}

export {PostContainer as default, Post}
