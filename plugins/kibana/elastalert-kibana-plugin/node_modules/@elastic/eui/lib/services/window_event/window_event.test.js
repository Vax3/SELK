"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _window_event = require("./window_event");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EuiWindowEvent', function () {
  beforeEach(function () {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
  });
  afterEach(function () {
    jest.restoreAllMocks();
  });
  test('attaches handler to window event on mount', function () {
    var handler = function handler() {
      return null;
    };

    (0, _enzyme.shallow)(_react.default.createElement(_window_event.EuiWindowEvent, {
      event: "click",
      handler: handler
    }));
    expect(window.addEventListener).toHaveBeenCalledTimes(1);
    expect(window.addEventListener).toHaveBeenCalledWith('click', handler);
  });
  test('removes handler on unmount', function () {
    var handler = function handler() {
      return null;
    };

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_window_event.EuiWindowEvent, {
      event: "click",
      handler: handler
    }));
    wrapper.unmount();
    expect(window.removeEventListener).toHaveBeenLastCalledWith('click', handler);
  });
  test('removes and re-attaches handler to window event on update', function () {
    var handler1 = function handler1() {
      return null;
    };

    var handler2 = function handler2() {
      return null;
    };

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_window_event.EuiWindowEvent, {
      event: "click",
      handler: handler1
    }));
    expect(window.addEventListener).toHaveBeenLastCalledWith('click', handler1);
    wrapper.setProps({
      event: 'hover',
      handler: handler2
    });
    expect(window.removeEventListener).toHaveBeenLastCalledWith('click', handler1);
    expect(window.addEventListener).toHaveBeenLastCalledWith('hover', handler2);
  });
  test('does not remove or re-attach handler if update is irrelevant', function () {
    var handler = function handler() {
      return null;
    };

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_window_event.EuiWindowEvent, {
      event: "click",
      handler: handler
    }));
    expect(window.addEventListener).toHaveBeenCalledTimes(1);
    wrapper.setProps({
      whatever: 'ugh'
    });
    expect(window.addEventListener).toHaveBeenCalledTimes(1);
    expect(window.removeEventListener).not.toHaveBeenCalled();
  });
});