import React from 'react'

import withStyles from '../../styles/withStyles'
import styles from './styles.scss'

const PageHeader = ({classes, ...props}) => (
  <header>
    <h1 className={classes.title}>
      {props.title}
    </h1>

    {props.children}
  </header>
)

export default withStyles(styles)(PageHeader)
