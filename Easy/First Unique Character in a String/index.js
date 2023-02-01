/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  //  Input: s = "ltecode"
  // Output: 0
  // Example 2:
  // Input: s = "loveleetcode"
  // Output: 2
  // Example 3:
  // Input: s = "aabb"
  // Output: -1
  // create a seen object
  // loop over string and add in seen object
  // if found only once, add index, if found multiple, change it to, "repeated"
  // loop over the array again and if seen[i] !== repeated, return that or -1

  if (!s.length) return -1;
  if (s.length === 1) return 1;

  const seen = {};

  for (let i = 0; i < s.length; i++) {
    if (!seen[s[i]]) {
      seen[s[i]] = `${i}`;
    } else {
      seen[s[i]] = "repeated";
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]] !== "repeated") {
      return +seen[s[i]];
    }
  }
  return -1;
};

console.log("TEst firstUniqChar", firstUniqChar("loveleetcode"));
