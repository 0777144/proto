

import React from 'react';
import {h1} from  './h1.css';

export default class H1 extends React.Component {
    render() {
        return <h1 className={h1}>{this.props.text}</h1>
    }
}
