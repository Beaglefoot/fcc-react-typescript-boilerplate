import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

require('./css/style.css');
require('./css/style.scss');

const store = createStore(() => ({
  msg: 'Redux store is created'
}));

const render = Component => (
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.querySelector('.container')
  )
);

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
