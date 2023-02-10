/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
  //
  // Example 1:
  // Input: haystack = "sadbutsad", needle = "sad"
  // Output: 0
  // Explanation: "sad" occurs at index 0 and 6.
  // The first occurrence is at index 0, so we return 0.
  //
  // Example 2:
  // Input: haystack = "leetcode", needle = "leeto"
  // Output: -1
  // Explanation: "leeto" did not occur in "leetcode", so we return -1.
  //
  // approach
  // if both needle and haystack is empty, return 0
  // if length of needle is greater than haystack, return -1
  // create a varialble detectLength, initialize it with 0.
  // loop through haystack
  // if haystack[n] !== needle[n] reset detectLength to 0
  // if(haystack[n] === needle[n] ) increment detectLength
  // if detectLength === needle.length, return n - (needle.length)

  const hayLength = haystack.length;
  const needleLength = needle.length;

  if (!hayLength && !needleLength) return 0;
  if (hayLength < needleLength) return -1;
  if (!haystack.includes(needle)) return -1;
  return haystack.split(`${needle}`)[0].length;
};

console.log("test strStr", strStr("sadbutsad", "sad"));
console.log("test strStr 1", strStr("leetcode", "leeto"));
console.log("test strStr 1", strStr("hello", "ll"));
console.log("test strStr 1", strStr("mississippi", "pi"));
