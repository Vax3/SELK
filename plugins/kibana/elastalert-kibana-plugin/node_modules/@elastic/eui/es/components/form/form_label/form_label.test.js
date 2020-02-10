import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';
import { EuiFormLabel } from './form_label';
describe('EuiFormLabel', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFormLabel, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('isFocused is rendered', function () {
      var component = render(React.createElement(EuiFormLabel, {
        isFocused: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('isInvalid is rendered', function () {
      var component = render(React.createElement(EuiFormLabel, {
        isInvalid: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('type can be changed to legend', function () {
      var component = render(React.createElement(EuiFormLabel, {
        type: "legend"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});