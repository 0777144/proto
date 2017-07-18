import React from 'react'

import styles from './styles'

const createMarkup = html => ({__html: html})

const Markdown = ({content}) => (
  <section className={styles.markdown} dangerouslySetInnerHTML={createMarkup(content)}/>
)

export default Markdown
