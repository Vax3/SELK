import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiSelectableMessage } from './selectable_message';
describe('EuiSelectableMessage', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiSelectableMessage, requiredProps));
    expect(component).toMatchSnapshot();
  });
});