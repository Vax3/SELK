import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiFlyoutBody } from './flyout_body';
describe('EuiFlyoutBody', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFlyoutBody, requiredProps));
    expect(component).toMatchSnapshot();
  });
});