"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requiredProps = void 0;
// We expect all React components to be able to support these props,
// which will be rendered as HTML attributes.
var requiredProps = {
  'aria-label': 'aria-label',
  className: 'testClass1 testClass2',
  'data-test-subj': 'test subject string'
};
exports.requiredProps = requiredProps;