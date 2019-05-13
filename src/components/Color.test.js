import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color.js';

describe('testing header component', () => {
  it('matches a screenshot', () => {
    const wrapper = shallow(<Color />);
    expect(wrapper).toMatchSnapshot();
  });
});
