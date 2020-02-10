import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiTextAlign } from './text_align';
describe('EuiTextAlign', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiTextAlign, requiredProps));
    expect(component).toMatchSnapshot();
  });
});