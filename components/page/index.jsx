

import React from 'react';
import Container from '../container';

import {page, title} from  './page.scss';


export default class Page extends React.Component {
    render() {
        return <main className={page}>
            <Container>
                <h1 className={title}>{this.props.title}</h1>
                {this.props.children}
            </Container>
        </main>
    }
}
