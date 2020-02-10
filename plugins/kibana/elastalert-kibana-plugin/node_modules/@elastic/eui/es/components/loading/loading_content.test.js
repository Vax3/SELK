import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiLoadingContent } from './loading_content';
var lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
describe('EuiLoadingContent', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiLoadingContent, requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('lines', function () {
    lines.forEach(function (line) {
      test("".concat(line, " is rendered"), function () {
        var component = render(React.createElement(EuiLoadingContent, {
          lines: line
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});