/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;
  const helper = (n) => {
    if (n === 1) return true;
    if (n % 3 !== 0) return false;
    n = n / 3;
    return helper(n);
  };
  return helper(n);
};

console.log("est isPowerOfThree", isPowerOfThree(9));
