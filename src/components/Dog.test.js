import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog.js';

describe('testing header component', () => {
  it('matches a screenshot', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
