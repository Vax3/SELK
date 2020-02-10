"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterConfigType = exports.createFilter = void 0;

var _react = _interopRequireDefault(require("react"));

var _is_filter = require("./is_filter");

var _field_value_selection_filter = require("./field_value_selection_filter");

var _field_value_toggle_filter = require("./field_value_toggle_filter");

var _field_value_toggle_group_filter = require("./field_value_toggle_group_filter");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFilter = function createFilter(index, config, query, onChange) {
  var props = {
    index: index,
    config: config,
    query: query,
    onChange: onChange
  };

  switch (config.type) {
    case 'is':
      return _react.default.createElement(_is_filter.IsFilter, props);

    case 'field_value_selection':
      return _react.default.createElement(_field_value_selection_filter.FieldValueSelectionFilter, props);

    case 'field_value_toggle':
      return _react.default.createElement(_field_value_toggle_filter.FieldValueToggleFilter, props);

    case 'field_value_toggle_group':
      return _react.default.createElement(_field_value_toggle_group_filter.FieldValueToggleGroupFilter, props);

    default:
      throw new Error("Unknown search filter type [".concat(config.type, "]"));
  }
};

exports.createFilter = createFilter;

var FilterConfigType = _propTypes.default.oneOfType([_is_filter.IsFilterConfigType, _field_value_selection_filter.FieldValueSelectionFilterConfigType, _field_value_toggle_filter.FieldValueToggleFilterConfigType, _field_value_toggle_group_filter.FieldValueToggleGroupFilterConfigType]);

exports.FilterConfigType = FilterConfigType;
createFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "createFilter"
};