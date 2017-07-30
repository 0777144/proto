import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

import App from './components/App';
import history from './history'
import configureStore from './store/configureStore'

const store = configureStore()
const rootEl = document.getElementById('root')

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <App/>
        </AppContainer>
      </ConnectedRouter>
    </Provider>,
    rootEl
  )

renderApp()

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', renderApp)
}
