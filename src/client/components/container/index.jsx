import React from 'react'
import classNames from 'classnames'

import withStyles from '../../styles/withStyles'
import styles from './styles.scss'

const Container = ({
  className,
  children,
  ...props,
}) => (
  <div className={classNames(className, props.classes.container)}>
    {children}
  </div>
)

export default withStyles(styles)(Container)
