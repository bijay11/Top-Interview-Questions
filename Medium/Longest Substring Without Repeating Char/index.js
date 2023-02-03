/**
 *
 * @param {string} s
 * @returns {number}
 */
var lengthOfLongestSubstring = function (s) {
  // declare tempVal and result,
  // create left and right pointer, left 0, right 1
  // create a seen hashMap to store seen values with index
  // increase tempVal on each pointer increment,
  // if seen, make left that index +1, and right that index + 2
  // compare the result vs tempVal, whichever is greater, make that a result
  // delete seen key
  // initial tempVal to 0

  const stringLength = s.length;
  if (stringLength <= 1) return stringLength;

  const seen = {};
  let left = 0;
  let right = 0;
  let result = 0;

  while (right < stringLength) {
    const currentChar = s[right];
    const prevSeenChar = seen[currentChar];

    if (prevSeenChar >= left) left = prevSeenChar + 1;
    seen[currentChar] = right;
    result = Math.max(result, right - (left - 1));
    right++;
  }

  return result;
};

// console.log("test lengthOfLongestSubstring", lengthOfLongestSubstring("au"));
console.log("test lengthOfLongestSubstring", lengthOfLongestSubstring("dvdf"));
// console.log(
//   "test lengthOfLongestSubstring 1",
//   lengthOfLongestSubstring("bbbbb")
// );
// console.log(
//   "test lengthOfLongestSubstring 2",
//   lengthOfLongestSubstring("pwwkew")
// );

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
