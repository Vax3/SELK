import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiFlyoutHeader } from './flyout_header';
describe('EuiFlyoutHeader', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFlyoutHeader, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('border is rendered', function () {
      var component = render(React.createElement(EuiFlyoutHeader, {
        hasBorder: true
      }));
      expect(component).toMatchSnapshot();
    });
  });
});