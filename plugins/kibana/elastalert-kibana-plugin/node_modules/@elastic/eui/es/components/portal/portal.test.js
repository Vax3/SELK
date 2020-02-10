import React from 'react';
import { mount } from 'enzyme';
import { EuiPortal } from './portal';
describe('EuiPortal', function () {
  test('is rendered', function () {
    var component = mount(React.createElement("div", null, React.createElement(EuiPortal, null, "Content")));
    expect(component).toMatchSnapshot();
  });
});