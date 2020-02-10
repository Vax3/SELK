import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test';
import { EuiFormErrorText } from './form_error_text';
describe('EuiFormErrorText', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFormErrorText, requiredProps, "This is an error."));
    expect(component).toMatchSnapshot();
  });
});