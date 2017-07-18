import React from 'react'
import {connect} from 'react-redux'

import {fetchPost} from '../../actions'
import Post from '../../components/post'

class PostContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPost(this.props.slug))
  }

  render() {
    return (
      <Post {...this.props.post}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post.data,
  };
}

export default connect(mapStateToProps)(PostContainer)
