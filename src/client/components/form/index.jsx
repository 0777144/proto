import React from 'react'
import classNames from 'classnames'

import styles from './styles'

const Form = ({
  children,
  className,
  ...props
}) => (
  <form {...props} className={classNames(styles.form, className)}>
    {children}
  </form>
)

export default Form
