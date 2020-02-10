"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../test/required_props");

var _description_list_title = require("./description_list_title");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiDescriptionListTitle', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_description_list_title.EuiDescriptionListTitle, _required_props.requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
});