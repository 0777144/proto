import React from 'react'
import classNames from 'classnames'

import styles from './styles'

const Container = ({
  className,
  children,
  ...props,
}) => (
  <div className={classNames(className, styles.container)}>
    {children}
  </div>
)

export default  Container
