import React from 'react'

import withStyles from '../../styles/withStyles'
import styles from './styles.scss'

const createMarkup = html => ({__html: html})

const Markdown = ({content, classes, ...props}) => (
  <section {...props} className={classes.markdown} dangerouslySetInnerHTML={createMarkup(content)}/>
)

export default withStyles(styles)(Markdown)
