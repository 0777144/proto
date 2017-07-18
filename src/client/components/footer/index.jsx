import React from 'react'
import Container from '../container'

import styles from './styles'

const Footer = (props) => (
  <footer className={styles.footer}>
    <Container>
      {props.children}
    </Container>
  </footer>
)

export default Footer
