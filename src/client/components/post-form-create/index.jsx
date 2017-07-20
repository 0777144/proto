import React, {Component} from 'react'

import Form from '../form'
import Input from '../input'
import Button from '../button'

class PostFormCreate extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    
    this.props.onSubmit({
      title: this.refs.title.getValue(),
      content: this.refs.content.getValue(),
    })
  }

  render() {
    return (
      <Form {...this.props} onSubmit={this.handleSubmit}>
        <Input type="text" placeholder="Title" ref="title"/>
        <Input type="textarea" placeholder="Text" ref="content"/>
        <Button type="submit">Create</Button>
      </Form>
    )
  }
}

export default PostFormCreate
