import React from 'react'
import Container from '../container'

import {nav, container} from './styles'

const Nav = props => (
  <nav className={nav}>
    <Container className={container}>
      {props.children}
    </Container>
  </nav>
)

export default Nav
