import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import TestableComponent from '../../src/components/TestableComponent';

const { renderIntoDocument } = TestUtils;

describe('TestableComponent', () => {
  it('exists in document', () => {
    const component = renderIntoDocument(<TestableComponent />);

    expect(component).to.exist;
  });
});
