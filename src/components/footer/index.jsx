

import React from 'react'
import Container from '../container'
import {footer, container} from './footer.scss'

const Footer = (props) => (
  <footer className={footer}>
    <Container className={container}>
      {props.children}
    </Container>
  </footer>
)

export default Footer
