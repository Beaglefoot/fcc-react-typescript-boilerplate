import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';

import TestableComponent from './TestableComponent';

const { renderIntoDocument } = TestUtils;

describe('TestableComponent', () => {
  it('exists in document', () => {
    const component = renderIntoDocument(<TestableComponent />);

    expect(component).to.exist;
  });
});
