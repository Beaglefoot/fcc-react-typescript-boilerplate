import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import TestableComponent from './TestableComponent';

const { renderIntoDocument } = TestUtils;

describe('<TestableComponent />', () => {
  it('exists in document', () => {
    const component = renderIntoDocument(<TestableComponent />);

    expect(component).toBeDefined();
  });
});
