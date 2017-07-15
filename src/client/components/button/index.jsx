

import React from 'react'
import {Link} from 'react-router-dom'

import {button, icon} from './button.scss'

const classNames = ({className, type}) => `${button} ${className} ${type === 'icon' && icon}`

const Button = ({
  text,
  children,
  ...props
}) => !props.to ? (
  <button {...props} className={classNames(props)}>
    {children || text}
  </button>
) : (
  <Link {...props} className={classNames(props)}>
    {children || text}
  </Link>
)

export default Button
