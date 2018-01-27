import React from 'react';

export default class TestableComponent extends React.Component {
  constructor() {
    super();
    
    this.state = { count: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(({ count }) => ({ count: count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    alert('unmounting');
  }

  render() {
    return (
      <div className="testable">
        <p>A testable component is here</p>
        <div>Local state counter: {this.state.count}</div>
      </div>
    );
  }
}