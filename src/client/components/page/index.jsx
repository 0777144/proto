import React from 'react'
import {Link} from 'react-router-dom'

import withStyles from '../../styles/withStyles'
import Container from '../container'
import PageHeader from '../page-header'
import styles from './styles'

const Page = ({classes, ...props}) => (
  <main className={classes.page}>
    <Container>
      <PageHeader title={props.title}>
        {props.header}
      </PageHeader>

      {props.children}
    </Container>
  </main>
)

export default withStyles(styles)(Page)
