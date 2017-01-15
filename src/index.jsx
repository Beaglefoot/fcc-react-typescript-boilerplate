import React from 'react';
import ReactDOM from 'react-dom';

import TestableComponent from './components/TestableComponent';

require('./css/style.css');
require('./css/style.scss');

function ParentComponent() {
  return (
    <div>
      <h1>freeCodeCamp React Boilerplate</h1>
      <TestableComponent />
    </div>
  );
}

ReactDOM.render(<ParentComponent />, document.querySelector('.container'));
