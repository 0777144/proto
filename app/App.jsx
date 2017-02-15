

import React from 'react';
import ReactDOM from 'react-dom';

import 'app.scss';

import Nav from '../components/nav';
import Logo from '../components/logo';
import Main from '../components/main';
import Article from '../components/article';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Nav>
                    <Logo/>
                </Nav>

                <Main>
                    <h1>Articles</h1>
                    <p>The skateboard is the way cool kids get around</p>

                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                </Main>
            </div>
        )
    }
}
