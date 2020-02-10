import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { commonlyUsedRangeShape, recentlyUsedRangeShape } from '../types';
import { prettyDuration } from '../pretty_duration';
import { EuiFlexGroup, EuiFlexItem } from '../../../flex';
import { EuiTitle } from '../../../title';
import { EuiSpacer } from '../../../spacer';
import { EuiLink } from '../../../link';
import { EuiText } from '../../../text';
import { EuiHorizontalRule } from '../../../horizontal_rule';
export function EuiRecentlyUsed(_ref) {
  var applyTime = _ref.applyTime,
      commonlyUsedRanges = _ref.commonlyUsedRanges,
      dateFormat = _ref.dateFormat,
      recentlyUsedRanges = _ref.recentlyUsedRanges;

  if (recentlyUsedRanges.length === 0) {
    return null;
  }

  var links = recentlyUsedRanges.map(function (_ref2) {
    var start = _ref2.start,
        end = _ref2.end;

    var applyRecentlyUsed = function applyRecentlyUsed() {
      applyTime({
        start: start,
        end: end
      });
    };

    return React.createElement(EuiFlexItem, {
      grow: false,
      key: "".concat(start, "-").concat(end)
    }, React.createElement(EuiLink, {
      onClick: applyRecentlyUsed
    }, prettyDuration(start, end, commonlyUsedRanges, dateFormat)));
  });
  return React.createElement(Fragment, null, React.createElement(EuiTitle, {
    size: "xxxs"
  }, React.createElement("span", null, "Recently used date ranges")), React.createElement(EuiSpacer, {
    size: "s"
  }), React.createElement(EuiText, {
    size: "s",
    className: "euiQuickSelectPopover__section"
  }, React.createElement(EuiFlexGroup, {
    gutterSize: "s",
    direction: "column"
  }, links)), React.createElement(EuiHorizontalRule, {
    margin: "s"
  }));
}
EuiRecentlyUsed.propTypes = {
  applyTime: PropTypes.func.isRequired,
  commonlyUsedRanges: PropTypes.arrayOf(commonlyUsedRangeShape).isRequired,
  dateFormat: PropTypes.string.isRequired,
  recentlyUsedRanges: PropTypes.arrayOf(recentlyUsedRangeShape)
};
EuiRecentlyUsed.defaultProps = {
  recentlyUsedRanges: []
};
EuiRecentlyUsed.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiRecentlyUsed",
  "props": {
    "recentlyUsedRanges": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "recentlyUsedRangeShape"
        }
      },
      "required": false,
      "description": ""
    },
    "applyTime": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "commonlyUsedRanges": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "commonlyUsedRangeShape"
        }
      },
      "required": true,
      "description": ""
    },
    "dateFormat": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};