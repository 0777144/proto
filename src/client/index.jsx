

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from 'containers/app';

import history from './history'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <App store={store} history={history}/>
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/app', () => {
    const NextApp = require('./containers/app').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} history={history}/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
