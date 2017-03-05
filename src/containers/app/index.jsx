

import React, {Component} from 'react';
import {connect} from 'react-redux';

import './app.scss';
import '../../styles/icon';


import Nav from '../../components/nav';
import Logo from '../../components/logo';
import Page from '../../components/page';
import User from '../../components/user';
import Article from '../../components/article';

import {icon as navIcon} from '../../components/nav/nav.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Logo />
          <User name={this.props.user.email} />
          <a className={navIcon} href='https://github.com/0777144/proto' target='_blank' rel='noopener noreferrer'><i className='icon-github' /></a>
        </Nav>

        <Page title='Notes'>
          {this.props.page.articles.map((article, index) =>
            <Article key={index} title={article.title} date={article.date}>
              {article.content}
            </Article>
          )}
        </Page>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  };
}

export default connect(mapStateToProps)(App);
