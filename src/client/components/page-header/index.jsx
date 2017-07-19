import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const PageHeader = props => (
  <header>
    <h1 className={props.classes.title}>
      {props.title}
    </h1>

    {props.children}
  </header>
)

export default injectSheet(styles)(PageHeader)
