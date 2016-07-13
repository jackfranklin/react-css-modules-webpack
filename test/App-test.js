import test from 'tape';
import React from 'react';
import App from '../src/App';

import { mount } from 'enzyme';

test('App counter', t => {
  t.test('it has an initial count of 0', t => {
    t.plan(1);
    const wrapper = mount(<App />);
    t.equal(wrapper.find('p').text(), '0');
  });

  t.test('clicking increments the count', t => {
    t.plan(1);
    const wrapper = mount(<App />);
    wrapper.find('button').simulate('click');
    t.equal(wrapper.find('p').text(), '1');
  });
});
