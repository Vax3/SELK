import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiTextColor } from './text_color';
describe('EuiTextColor', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTextColor, requiredProps));
    expect(component).toMatchSnapshot();
  });
});