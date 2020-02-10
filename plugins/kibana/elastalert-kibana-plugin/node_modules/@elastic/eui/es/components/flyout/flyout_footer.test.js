import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiFlyoutFooter } from './flyout_footer';
describe('EuiFlyoutFooter', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFlyoutFooter, requiredProps));
    expect(component).toMatchSnapshot();
  });
});