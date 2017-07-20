import React from 'react'
import Container from '../container'

import withStyles from '../../styles/withStyles'
import styles from './styles'

const Footer = props => (
  <footer className={props.classes.footer}>
    <Container>
      {props.children}
    </Container>
  </footer>
)

export default withStyles(styles)(Footer)
