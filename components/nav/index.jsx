

import React from 'react';
import {nav} from  './nav.css';

export default class Nav extends React.Component {
    render() {
        return <nav className={nav}>
            {this.props.children}
        </nav>
    }
}
