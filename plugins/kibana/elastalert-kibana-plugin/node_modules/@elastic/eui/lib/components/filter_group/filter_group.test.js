"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _test = require("../../test");

var _filter_group = require("./filter_group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiFilterGroup', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react.default.createElement(_filter_group.EuiFilterGroup, _test.requiredProps));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    test('fullWidth is rendered', function () {
      var component = (0, _enzyme.render)(_react.default.createElement(_filter_group.EuiFilterGroup, {
        fullWidth: true
      }));
      expect(component).toMatchSnapshot();
    });
  });
});