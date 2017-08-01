import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

import withStyles from '../../styles/withStyles'
import styles from './styles.scss'

const Button = ({
  text,
  children,
  className: classNameProp,
  classes,
  ...props
}) => {
  const className = classNames(
    classNameProp,
    classes.button,
    {[classes.icon]: props.type === 'icon'}
  )

  return !props.to ? (
    <button
      {...props}
      className={className}
    >
      {children || text}
    </button>
  ) : (
    <Link
      {...props}
      className={className}
    >
      {children || text}
    </Link>
  )
}

export default withStyles(styles)(Button)
