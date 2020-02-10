"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _validatable_control = require("./validatable_control");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiValidatableControl', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_validatable_control.EuiValidatableControl, null, _react.default.createElement("input", null)));
    expect(component).toMatchSnapshot();
  });
});