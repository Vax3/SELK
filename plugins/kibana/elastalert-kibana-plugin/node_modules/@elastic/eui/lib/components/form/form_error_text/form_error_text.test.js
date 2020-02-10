"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../../test");

var _form_error_text = require("./form_error_text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiFormErrorText', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_form_error_text.EuiFormErrorText, _test.requiredProps, "This is an error."));
    expect(component).toMatchSnapshot();
  });
});