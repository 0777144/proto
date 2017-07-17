

import React from 'react'
import {connect} from 'react-redux'

import {createPost} from '../../actions'
import PostFormCreate from '../../components/post-form-create'

const PostFormCreateContainer = props => (
  <PostFormCreate {...props}/>
)

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: data => dispatch(createPost(data))
  };
}

export default connect(null, mapDispatchToProps)(PostFormCreateContainer)
