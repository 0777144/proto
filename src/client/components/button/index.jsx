import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

import styles from './styles'

const Button = ({
  text,
  children,
  className,
  ...props
}) => {
  className = classNames(
    className,
    styles.button,
    {[styles.icon]: props.type === 'icon'}
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

export default Button
