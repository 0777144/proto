

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import PostList from '../../components/post-list'
import {fetchPosts} from '../../actions'

class PostListContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPosts())
  }

  render() {
    return (
      <PostList {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.items,
  }
}

export default connect(mapStateToProps)(PostListContainer)
