import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test';
import { EuiFormHelpText } from './form_help_text';
describe('EuiFormHelpText', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFormHelpText, requiredProps, "This is help text."));
    expect(component).toMatchSnapshot();
  });
});