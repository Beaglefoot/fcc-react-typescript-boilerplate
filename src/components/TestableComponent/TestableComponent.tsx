import * as React from 'react';

interface IState {
  count: number;
}

export default class TestableComponent extends React.Component<{}, IState> {
  state = { count: 0 };

  componentDidMount(): void {
    const delay = 1000;
    setInterval(() => {
      this.setState(({ count }) => ({ count: count + 1 }));
    }, delay);
  }

  componentWillUnmount(): void {
    alert('unmounting');
  }

  render(): JSX.Element {
    return (
      <div className="testable">
        <p>A testable component is here</p>
        <div>Local state counter: {this.state.count}</div>
      </div>
    );
  }
}
