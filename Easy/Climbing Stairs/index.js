/**
 * @param {number} n
 * @return {number}
 */
// you can either climb 1 or 2 steps.
// Combination for 4
// 1+1+1+1
// 1+1+2
// 1+2+1
// 2+1+1
// 2+2
// --> 5

// Combination for 5
// 1+1+1+1+1
// 1+1+1+2
// 1+1+2+1
// 1+2+1+1
// 2+1+1+1
// 1+1+2
// 1+2+2
// 2+1+2
// --> 8

// 1 -> 1
// 2 -> 2
// 3 -> 3
// 4 -> 5
// 5 -> 8
//
// this is a fibonacci sequence

const cache = [];

function climbStairs(n) {
  if (n <= 3) return n;
  if (!cache[n]) cache[n] = climbStairs(n - 2) + climbStairs(n - 1);

  return cache[n];
}

console.log("test climbStairs", climbStairs(5));
