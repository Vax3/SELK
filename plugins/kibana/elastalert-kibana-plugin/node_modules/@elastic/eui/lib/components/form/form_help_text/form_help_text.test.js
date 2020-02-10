"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../../test");

var _form_help_text = require("./form_help_text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiFormHelpText', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_form_help_text.EuiFormHelpText, _test.requiredProps, "This is help text."));
    expect(component).toMatchSnapshot();
  });
});