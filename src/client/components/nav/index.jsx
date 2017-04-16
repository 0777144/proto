

import React from 'react'
import Container from '../container'
import {nav, container} from './nav.scss'

export default class Nav extends React.Component {
  render() {
    return (<nav className={nav}>
      <Container className={container}>
        {this.props.children}
      </Container>
    </nav>);
  }
}
