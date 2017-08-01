import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '../../styles/withStyles'
import styles from './styles.scss'

class Input extends React.Component {
  getValue() {
    return this.refs.input.value
  }

  render() {
    const {classes, ...props} = this.props
    return props.type === 'textarea' ? (
      <textarea
        {...props}
        role='textbox'
        className={classes.input}
        ref="input"
      />
        ) : (
      <input
        {...props}
        className={classes.input}
        ref='input'
      />
    )
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
}

export default withStyles(styles)(Input)
