
/*
* Взято из react-router-dom/Link и немного упрощено
* https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js
* */
import React, { PropTypes } from 'react'
import History from '../../history'

const isModifiedEvent = (event) =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)


class Link extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    target: PropTypes.string,
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired
  }

  handleClick = (event) => {
    if (this.props.onClick)
      this.props.onClick(event)

    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
      event.preventDefault()

      const {to} = this.props

      History.push(to)
    }
  }

  render() {
    const {to, ...props} = this.props

    const href = History.createHref(
      typeof to === 'string' ? {pathname: to} : to
    )

    return <a {...props} onClick={this.handleClick} href={href}/>
  }
}

export default Link
