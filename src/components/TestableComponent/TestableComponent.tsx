import * as React from 'react';

export default class TestableComponent extends React.Component<
  {},
  { count: number }
> {
  state = { count: 0 };

  componentDidMount() {
    const delay = 1000;
    setInterval(() => {
      this.setState(({ count }) => ({ count: count + 1 }));
    }, delay);
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
