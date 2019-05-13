import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

describe('testing header component', () => {
  it('matches a screenshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
