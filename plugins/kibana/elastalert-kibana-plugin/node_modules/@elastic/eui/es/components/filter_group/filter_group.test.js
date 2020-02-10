import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';
import { EuiFilterGroup } from './filter_group';
describe('EuiFilterGroup', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiFilterGroup, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('fullWidth is rendered', function () {
      var component = render(React.createElement(EuiFilterGroup, {
        fullWidth: true
      }));
      expect(component).toMatchSnapshot();
    });
  });
});