import React from 'react'
import classNames from 'classnames'

import withStyles from '../../styles/withStyles'
import styles from './styles'

const Form = ({
  children,
  className,
  ...props
}) => (
  <form {...props} className={classNames(props.classes.form, className)}>
    {children}
  </form>
)

export default withStyles(styles)(Form)
