

import React from 'react'
import Request from 'superagent'

import Post from '../../components/post'

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

export default PostContainer
