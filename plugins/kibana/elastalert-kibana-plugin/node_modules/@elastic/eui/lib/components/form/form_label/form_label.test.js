"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _required_props = require("../../../test/required_props");

var _form_label = require("./form_label");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiFormLabel', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_form_label.EuiFormLabel, _required_props.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('isFocused is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_label.EuiFormLabel, {
        isFocused: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('isInvalid is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_label.EuiFormLabel, {
        isInvalid: true
      }));
      expect(component).toMatchSnapshot();
    });
    test('type can be changed to legend', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_form_label.EuiFormLabel, {
        type: "legend"
      }));
      expect(component).toMatchSnapshot();
    });
  });
});