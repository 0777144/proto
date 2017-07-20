import {defaultProps} from 'recompose'

const withStyles = styles => Component => defaultProps({classes: styles})(Component)

export default withStyles
