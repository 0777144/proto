

import React from 'react'

import {button} from './button.scss'

const Button = ({
  text,
  children,
  ...props
}) => (
  <button className={button} {...props}>
    {children || text}
  </button>
)

export default Button
