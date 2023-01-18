/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var removeDuplicates = function (nums) {
  const numsLength = nums.length;
  // first check if the nums is empty or check if it contains only one element, if it is return nums

  if (numsLength <= 1) return numsLength;
  // loop through array, start with 1
  // if n-1 is same as n, then remove the n from the array and add space as last element of an array
  let map = {};
  for (let i = 0; i < numsLength; i++) {
    if (map[nums[i]] !== undefined) {
      nums.splice(map[nums[i]], 1);
      i--;
      map[nums[i]] = i;
    } else {
      map[nums[i]] = i;
    }
  }
  return nums.length;
};
console.log("test removeDuplicates", removeDuplicates([1, 1, 2]));

// Hints
// integer array nums sorted in non-decreasing order,
// relative order of the elements should be the same
// have the result in first place in order and then move the duplicate as space or anything

// Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// Output: 5, (nums = [0, 1, 2, 3, 4, , , , ,  ]);
