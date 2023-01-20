/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  // x is a non-negative number
  // return the square root of x rounded down to the nearest intege
  // return value should be non-negative
  if (x < 0) return "Not valid";
  if (x < 2) return x;

  // Binary Tree Solution

  let left = 0;
  let right = Math.floor(x / 2);
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const midSquare = mid * mid;

    if (midSquare < x) left = mid + 1;
    else if (midSquare > x) right = mid - 1;
    else return mid;
  }
  return right;
};

console.log("test mySqrt", mySqrt(50));
