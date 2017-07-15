import React from 'react'

import {markdown} from './markdown.scss'

const createMarkup = html => ({__html: html})

const Markdown = ({content}) => (
  <section className={markdown} dangerouslySetInnerHTML={createMarkup(content)}/>
)

export default Markdown
