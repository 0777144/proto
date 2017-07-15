

import React from 'react'

const Button = ({
  text,
  children,
  ...props
}) => (
  <button {...props}>
    {children || text}
  </button>
)

export default Button
