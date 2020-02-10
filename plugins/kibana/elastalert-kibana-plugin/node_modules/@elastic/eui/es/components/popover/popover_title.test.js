import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiPopoverTitle } from './popover_title';
describe('EuiPopoverTitle', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiPopoverTitle, requiredProps));
    expect(component).toMatchSnapshot();
  });
});