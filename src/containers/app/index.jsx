

import React from 'react';

import './app.scss';
import '../../styles/icon';


import Nav from '../../components/nav';
import Logo from '../../components/logo';
import Page from '../../components/page';
import Article from '../../components/article';

import {icon as navIcon} from '../../components/nav/nav.scss';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <Logo />
          <a className={navIcon} href='https://github.com/0777144/proto' target='_blank' rel='noopener noreferrer'><i className='icon-github' /></a>
        </Nav>

        <Page title='Notes'>
          <Article title={'Статья на русском'} date='12.03.95 7:40'>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}</Article>
          <Article title='English article' date='12.03.95 7:40'>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}</Article>
        </Page>
      </div>
    );
  }
}
