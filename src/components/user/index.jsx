

import React, {PropTypes, Component} from 'react';

export default class User extends Component {
  render() {
    const {name} = this.props;
    return (<span style={{color: 'white'}}>
      <p>Привет, {name}!</p>
    </span>);
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired
};
