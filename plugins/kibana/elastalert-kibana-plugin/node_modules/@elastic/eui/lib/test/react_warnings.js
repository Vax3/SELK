"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopThrowingReactWarnings = exports.startThrowingReactWarnings = void 0;

/* tslint:disable:no-console */

/*
  Use this utility to throw errors whenever React complains via the console
  about things like invalid propTypes. This lets us assert that a propType
  check works correctly with `toThrow`.

  Usage looks like:

  beforeAll(startThrowingReactWarnings);
  afterAll(stopThrowingReactWarnings);
*/
var consoleWarn = console.warn;
var consoleError = console.error;

var startThrowingReactWarnings = function startThrowingReactWarnings() {
  console.warn = console.error = function (msg) {
    throw msg;
  };
};

exports.startThrowingReactWarnings = startThrowingReactWarnings;

var stopThrowingReactWarnings = function stopThrowingReactWarnings() {
  console.warn = consoleWarn;
  console.error = consoleError;
};

exports.stopThrowingReactWarnings = stopThrowingReactWarnings;