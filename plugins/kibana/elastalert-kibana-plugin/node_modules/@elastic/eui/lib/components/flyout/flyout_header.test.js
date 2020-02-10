"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _flyout_header = require("./flyout_header");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiFlyoutHeader', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_flyout_header.EuiFlyoutHeader, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('border is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_flyout_header.EuiFlyoutHeader, {
        hasBorder: true
      }));
      expect(component).toMatchSnapshot();
    });
  });
});