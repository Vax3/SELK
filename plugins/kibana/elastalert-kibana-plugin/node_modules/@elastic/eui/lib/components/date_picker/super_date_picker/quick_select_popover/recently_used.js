"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRecentlyUsed = EuiRecentlyUsed;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _types = require("../types");

var _pretty_duration = require("../pretty_duration");

var _flex = require("../../../flex");

var _title = require("../../../title");

var _spacer = require("../../../spacer");

var _link = require("../../../link");

var _text = require("../../../text");

var _horizontal_rule = require("../../../horizontal_rule");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EuiRecentlyUsed(_ref) {
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

    return _react.default.createElement(_flex.EuiFlexItem, {
      grow: false,
      key: "".concat(start, "-").concat(end)
    }, _react.default.createElement(_link.EuiLink, {
      onClick: applyRecentlyUsed
    }, (0, _pretty_duration.prettyDuration)(start, end, commonlyUsedRanges, dateFormat)));
  });
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_title.EuiTitle, {
    size: "xxxs"
  }, _react.default.createElement("span", null, "Recently used date ranges")), _react.default.createElement(_spacer.EuiSpacer, {
    size: "s"
  }), _react.default.createElement(_text.EuiText, {
    size: "s",
    className: "euiQuickSelectPopover__section"
  }, _react.default.createElement(_flex.EuiFlexGroup, {
    gutterSize: "s",
    direction: "column"
  }, links)), _react.default.createElement(_horizontal_rule.EuiHorizontalRule, {
    margin: "s"
  }));
}

EuiRecentlyUsed.propTypes = {
  applyTime: _propTypes.default.func.isRequired,
  commonlyUsedRanges: _propTypes.default.arrayOf(_types.commonlyUsedRangeShape).isRequired,
  dateFormat: _propTypes.default.string.isRequired,
  recentlyUsedRanges: _propTypes.default.arrayOf(_types.recentlyUsedRangeShape)
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