import React from 'react';
import { connect } from 'react-redux';

import TestableComponent from '../TestableComponent/TestableComponent';

import { container } from './App.scss';

function App(props) {
  return (
    <div className={container}>
      <h1>freeCodeCamp React Boilerplate</h1>
      <TestableComponent />
      <p>{props.msg}</p>
    </div>
  );
}

function mapStateToProps({ msg }) {
  return { msg };
}

export default connect(mapStateToProps)(App);
