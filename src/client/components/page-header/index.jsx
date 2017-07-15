

import React from 'react'

import {title} from './page-header.scss';

const PageHeader = (props) => (
  <header>
    <h1 className={title}>
      {props.title}
    </h1>
    {props.children}
  </header>
)

export default PageHeader
