import React from 'react';
import { connect } from 'react-redux';

import TestableComponent from './TestableComponent';

function App(props) {
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

export default connect(mapStateToProps)(App);
