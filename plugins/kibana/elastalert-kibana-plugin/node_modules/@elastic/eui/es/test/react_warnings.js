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
export var startThrowingReactWarnings = function startThrowingReactWarnings() {
  console.warn = console.error = function (msg) {
    throw msg;
  };
};
export var stopThrowingReactWarnings = function stopThrowingReactWarnings() {
  console.warn = consoleWarn;
  console.error = consoleError;
};