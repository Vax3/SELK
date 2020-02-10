import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiPopoverFooter } from './popover_footer';
describe('EuiPopoverFooter', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiPopoverFooter, requiredProps));
    expect(component).toMatchSnapshot();
  });
});