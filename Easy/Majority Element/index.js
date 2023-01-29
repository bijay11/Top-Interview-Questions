/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  //  The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
  // create a hashMap and store the num and initiate it with 1, increment if it already exists

  const numsObj = {};

  for (let num of nums) {
    if (num in numsObj) {
      numsObj[num]++;
    } else {
      numsObj[num] = 1;
    }
  }
  let maxRepeated = Math.floor(nums.length / 2);

  for (let num in numsObj) {
    if (numsObj[num] > maxRepeated) return num;
  }
};

console.log("test majorityElement", majorityElement([3, 2, 3]));

// Input: nums = [3, 2, 3];
// Output: 3;

// Input: nums = [2, 2, 1, 1, 1, 2, 2];
// Output: 2;

// Follow-up: Could you solve the problem in linear time and in O(1) space?
