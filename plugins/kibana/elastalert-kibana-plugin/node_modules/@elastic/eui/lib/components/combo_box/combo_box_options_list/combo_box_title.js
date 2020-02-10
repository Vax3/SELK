"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiComboBoxTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EuiComboBoxTitle = function EuiComboBoxTitle(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "euiComboBoxTitle"
  }, children);
};

exports.EuiComboBoxTitle = EuiComboBoxTitle;
EuiComboBoxTitle.propTypes = {};
EuiComboBoxTitle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiComboBoxTitle"
};