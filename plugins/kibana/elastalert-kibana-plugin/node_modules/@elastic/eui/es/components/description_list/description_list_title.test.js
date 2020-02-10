import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiDescriptionListTitle } from './description_list_title';
describe('EuiDescriptionListTitle', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiDescriptionListTitle, requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
});