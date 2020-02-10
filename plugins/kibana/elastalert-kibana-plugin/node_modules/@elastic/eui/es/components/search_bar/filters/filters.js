import React from 'react';
import { IsFilter, IsFilterConfigType } from './is_filter';
import { FieldValueSelectionFilter, FieldValueSelectionFilterConfigType } from './field_value_selection_filter';
import { FieldValueToggleFilter, FieldValueToggleFilterConfigType } from './field_value_toggle_filter';
import { FieldValueToggleGroupFilter, FieldValueToggleGroupFilterConfigType } from './field_value_toggle_group_filter';
import PropTypes from 'prop-types';
export var createFilter = function createFilter(index, config, query, onChange) {
  var props = {
    index: index,
    config: config,
    query: query,
    onChange: onChange
  };

  switch (config.type) {
    case 'is':
      return React.createElement(IsFilter, props);

    case 'field_value_selection':
      return React.createElement(FieldValueSelectionFilter, props);

    case 'field_value_toggle':
      return React.createElement(FieldValueToggleFilter, props);

    case 'field_value_toggle_group':
      return React.createElement(FieldValueToggleGroupFilter, props);

    default:
      throw new Error("Unknown search filter type [".concat(config.type, "]"));
  }
};
export var FilterConfigType = PropTypes.oneOfType([IsFilterConfigType, FieldValueSelectionFilterConfigType, FieldValueToggleFilterConfigType, FieldValueToggleGroupFilterConfigType]);
createFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "createFilter"
};