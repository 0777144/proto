

import React from 'react'

import styles from './form'

const Form = ({
  children,
  ...props
}) => (
  <form className={styles.form} {...props}>
    {children}
  </form>
)

export default Form
