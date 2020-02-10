"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _loading_content = require("./loading_content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
describe('EuiLoadingContent', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_loading_content.EuiLoadingContent, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('lines', function () {
    lines.forEach(function (line) {
      test("".concat(line, " is rendered"), function () {
        var component = (0, _enzyme.render)(_react.default.createElement(_loading_content.EuiLoadingContent, {
          lines: line
        }));
        expect(component).toMatchSnapshot();
      });
    });
  });
});