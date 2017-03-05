

import React, {PropTypes, Component} from 'react';
import Container from '../container';

import {page, title} from './page.scss';


export default class Page extends Component {
  render() {
    return (<main className={page}>
      <Container>
        <h1 className={title}>{this.props.title}</h1>
        {this.props.children}
      </Container>
    </main>);
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};
