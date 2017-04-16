

import React from 'react'
import Container from '../container';
import {page, title} from './page.scss';

const Page = (props) => (
  <main className={page}>
    <Container>
      <h1 className={title}>{props.title}</h1>
      {props.children}
    </Container>
  </main>
)

export default Page
