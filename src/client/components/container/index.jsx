import React from 'react'
import {container} from './container.scss'

const Container = props => (
  <div className={[container, props.className].join(' ')}>
    {props.children}
  </div>
)

export default  Container
