var _accessibleClickKeys;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { ENTER, SPACE } from '../key_codes'; // These keys are used to execute click actions on interactive elements like buttons and links.

export var accessibleClickKeys = (_accessibleClickKeys = {}, _defineProperty(_accessibleClickKeys, ENTER, 'enter'), _defineProperty(_accessibleClickKeys, SPACE, 'space'), _accessibleClickKeys);