"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchRandom = patchRandom;
exports.unpatchRandom = unpatchRandom;
var originalMathRandom = Math.random;

function patchRandom() {
  var x = 0;

  Math.random = function () {
    return x += 0.00001;
  };
}

function unpatchRandom() {
  Math.random = originalMathRandom;
}