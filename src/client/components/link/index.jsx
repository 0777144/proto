import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import classNames from 'classnames'

import withStyles from '../../styles/withStyles'
import styles from './styles.scss'

const Link = ({
  clear,
  classes,
  ...props,
}) => (
  <RouterLink {...props} className={classNames(classes.link, {[classes.clear]: clear})}>
    {props.children}
  </RouterLink>
)

export default withStyles(styles)(Link)
