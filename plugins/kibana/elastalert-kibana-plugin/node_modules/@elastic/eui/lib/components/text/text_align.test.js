"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _text_align = require("./text_align");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiTextAlign', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_text_align.EuiTextAlign, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
});