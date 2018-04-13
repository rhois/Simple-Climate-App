/* global expect */
/* eslint-env node, mocha */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { Dummy } from './dummy';

describe('Dummy Test', () => {
  it('It return true ', () => {
    expect(1).to.equal(1);
  });

  it('contains spec with an expectation', () => {
    expect(shallow(<Dummy />)
      .contains(<div className="dummy" />)).to.equal(true);
  });

  it('contains spec with an expectation', () => {
    expect(shallow(<Dummy />).is('.dummy')).to.equal(true);
  });

  it('contains spec with an expectation', () => {
    expect(mount(<Dummy />).find('.dummy').length).to.equal(1);
  });
});
