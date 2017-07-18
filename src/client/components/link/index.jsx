import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import classNames from 'classnames'

import styles from './styles'

console.log(styles)

const Link = ({
  clear,
  ...props,
}) => (
  <RouterLink {...props} className={classNames(styles.link, {[styles.clear]: clear})}>
    {props.children}
  </RouterLink>
)

export default Link
