"use strict";

var _timer = require("./timer");

describe('Timer', function () {
  describe('constructor', function () {
    test('counts down until time elapses and calls callback', function (done) {
      var callbackSpy = jest.fn(); // tslint:disable-next-line:no-unused-expression

      new _timer.Timer(callbackSpy, 5);
      setTimeout(function () {
        expect(callbackSpy).toBeCalled();
        done();
      }, 8);
    });
  });
  describe('pause', function () {
    test('stops timer', function (done) {
      var callbackSpy = jest.fn();
      var timer = new _timer.Timer(callbackSpy, 5);
      timer.pause();
      setTimeout(function () {
        expect(callbackSpy).not.toBeCalled();
        done();
      }, 8);
    });
  });
  describe('resume', function () {
    test('starts timer again', function (done) {
      var callbackSpy = jest.fn();
      var timer = new _timer.Timer(callbackSpy, 5);
      timer.pause();
      timer.resume();
      setTimeout(function () {
        expect(callbackSpy).toBeCalled();
        done();
      }, 8);
    });
  });
  describe('clear', function () {
    test('prevents timer from being called', function (done) {
      var callbackSpy = jest.fn();
      var timer = new _timer.Timer(callbackSpy, 5);
      timer.clear();
      setTimeout(function () {
        expect(callbackSpy).not.toBeCalled();
        done();
      }, 8);
    });
  });
  describe('finish', function () {
    test('calls callback immediately', function () {
      var callbackSpy = jest.fn();
      var timer = new _timer.Timer(callbackSpy, 5);
      timer.finish();
      expect(callbackSpy).toBeCalled();
    });
  });
});