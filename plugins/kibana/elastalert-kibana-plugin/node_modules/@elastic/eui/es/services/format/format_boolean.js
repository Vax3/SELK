import { isNil } from '../predicate';
export var formatBoolean = function formatBoolean(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$yes = _ref.yes,
      yes = _ref$yes === void 0 ? 'Yes' : _ref$yes,
      _ref$no = _ref.no,
      no = _ref$no === void 0 ? 'No' : _ref$no,
      _ref$nil = _ref.nil,
      nil = _ref$nil === void 0 ? '' : _ref$nil;

  if (isNil(value)) {
    return nil;
  }

  return value ? yes : no;
};