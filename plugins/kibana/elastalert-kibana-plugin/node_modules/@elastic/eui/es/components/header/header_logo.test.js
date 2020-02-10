import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiHeaderLogo } from './header_logo';
describe('EuiHeaderLogo', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiHeaderLogo, requiredProps));
    expect(component).toMatchSnapshot();
  });
  test('renders href', function () {
    var component = render(React.createElement(EuiHeaderLogo, {
      href: "#"
    }));
    expect(component).toMatchSnapshot();
  });
  test('renders optional props', function () {
    var component = render(React.createElement(EuiHeaderLogo, {
      iconType: "alert",
      iconTitle: "Moby Dick",
      style: {
        color: 'red'
      }
    }));
    expect(component).toMatchSnapshot();
  });
});