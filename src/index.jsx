import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import TestableComponent from './components/TestableComponent';

require('./css/style.css');
require('./css/style.scss');

const store = createStore(() => ({
  msg: 'Redux store is created'
}));

function ParentComponent(props) {
  return (
    <div>
      <h1>freeCodeCamp React Boilerplate</h1>
      <TestableComponent />
      <p>{props.msg}</p>
    </div>
  );
}

function mapStateToProps({ msg }) {
  return { msg };
}

const ParentContainer = connect(mapStateToProps)(ParentComponent);

ReactDOM.render(
  <Provider store={store}>
    <ParentContainer />
  </Provider>,
  document.querySelector('.container')
);
