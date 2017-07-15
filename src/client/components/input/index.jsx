

import React from 'react'
import PropTypes from 'prop-types'

import styles from './input.scss'

class Input extends React.Component {
  getValue() {
    return this.refs.input.value
  }

  render() {
    return (
      <div>
        {this.props.type === 'textarea' ? (
          <textarea
            {...this.props}
            role='textbox'
            className={styles.input}
            ref="input"
          />
        ) : (
          <input
            {...this.props}
            className={styles.input}
            ref='input'
          />
        )}
      </div>
    )
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
}

export default Input
