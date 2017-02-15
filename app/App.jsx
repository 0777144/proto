

import React from 'react';
import ReactDOM from 'react-dom';

import 'app.scss';

import Nav from '../components/nav';
import Logo from '../components/logo';
import Container from '../components/container';
import Page from '../components/page';
import Article from '../components/article';

let loremIpsumTitle = 'Sed ut perspiciatis unde omnis iste';
let loremIpsumContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Nav>
                    <Container>
                        <Logo/>
                    </Container>
                </Nav>

                <Page title="Notes">
                    <Article title={'Статья на русском'} date="12.03.95 7:40">{loremIpsumContent}</Article>
                    <Article title={loremIpsumTitle} date="12.03.95 7:40">{loremIpsumContent}</Article>
                    <Article title={loremIpsumTitle} date="12.03.95 7:40">{loremIpsumContent}</Article>
                    <Article title={loremIpsumTitle} date="12.03.95 7:40">{loremIpsumContent}</Article>
                    <Article title={loremIpsumTitle} date="12.03.95 7:40">{loremIpsumContent}</Article>
                    <Article title={loremIpsumTitle} date="12.03.95 7:40">{loremIpsumContent}</Article>
                </Page>
            </div>
        )
    }
}
