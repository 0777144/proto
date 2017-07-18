import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  title: {
    fontFamily: '\'Roboto Slab\', serif',
    fontSize: '32px',
    margin: '20px auto 0 auto',
    padding: '0 20px',
    display: 'inline-block',
    color: 'red',
  },
}

const PageHeader = props => (
  <header>
    <h1 className={props.classes.title}>
      {props.title}
    </h1>

    {props.children}
  </header>
)

export default injectSheet(styles)(PageHeader)
