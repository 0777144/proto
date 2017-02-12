

import React from 'react';
import ReactDOM from 'react-dom';

import 'app.css';

import Nav from '../components/nav';
import Logo from '../components/logo';


ReactDOM.render(
    <Nav>
        <Logo/>
    </Nav>,
    document.getElementById('app')
);

