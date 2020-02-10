var originalMathRandom = Math.random;
export function patchRandom() {
  var x = 0;

  Math.random = function () {
    return x += 0.00001;
  };
}
export function unpatchRandom() {
  Math.random = originalMathRandom;
}