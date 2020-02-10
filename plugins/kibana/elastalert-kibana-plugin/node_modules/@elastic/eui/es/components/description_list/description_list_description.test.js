import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiDescriptionListDescription } from './description_list_description';
describe('EuiDescriptionListDescription', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiDescriptionListDescription, requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
});