import React from 'react'

import styles from './styles'

const PageHeader = props => (
  <header>
    <h1 className={styles.title}>
      {props.title}
    </h1>
    
    {props.children}
  </header>
)

export default PageHeader
