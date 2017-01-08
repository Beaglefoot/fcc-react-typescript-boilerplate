import React from 'react';
import ReactDOM from 'react-dom';

function ParentComponent() {
  return (
    <div>
      <h1>freeCodeCamp React Boilerplate</h1>
    </div>
  );
}

ReactDOM.render(<ParentComponent />, document.querySelector('.container'));
