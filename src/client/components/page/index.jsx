import React from 'react'
import {Link} from 'react-router-dom'

import Container from '../container';
import PageHeader from '../page-header';
import styles from './styles';

const Page = (props) => (
  <main className={styles.page}>
    <Container>
      <PageHeader title={props.title}>
        {props.header}
      </PageHeader>

      {props.children}
    </Container>
  </main>
)

export default Page
