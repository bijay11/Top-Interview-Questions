/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  //   Starting with any positive integer, replace the number by the sum of the squares of its digits.
  // Repeat the process until the number equals 1 (where it will stay),
  // or it loops endlessly in a cycle which does not include 1.
  // Those numbers for which this process ends in 1 are happy.
  // Return true if n is a happy number, and false if not.

  const hashMap = {};

  const helper = (n) => {
    if (n === 1) return true;

    const newNum = `${n}`.split("").reduce((acc, cur) => acc + +(cur ** 2), 0);
    if (hashMap[newNum]) return false;
    hashMap[newNum] = newNum;
    return helper(newNum);
  };
  return helper(n);
};

isHappy(19);

// Input: n = 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
