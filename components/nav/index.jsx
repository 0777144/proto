

import React from 'react';
import {nav} from  './nav.scss';

export default class Nav extends React.Component {
    render() {
        return <nav className={nav}>
            {this.props.children}
        </nav>
    }
}
