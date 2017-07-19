import React from 'react'
import Container from '../container'

import styles from './styles'

const Nav = props => (
  <nav className={styles.nav}>
    <Container className={styles.container}>
      {props.children}
    </Container>
  </nav>
)

export default Nav
