import React from 'react'
import Container from '../container'

import withStyles from '../../styles/withStyles'
import styles from './styles'

const Nav = ({classes, ...props}) => (
  <nav className={classes.nav}>
    <Container className={classes.container}>
      {props.children}
    </Container>
  </nav>
)

export default withStyles(styles)(Nav)
