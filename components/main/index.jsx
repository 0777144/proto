

import React from 'react';
import {main} from  './main.scss';

export default class Main extends React.Component {
    render() {
        return <main className={main}>
            {this.props.children}
        </main>
    }
}
