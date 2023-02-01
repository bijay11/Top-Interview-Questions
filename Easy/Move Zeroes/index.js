/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pointer = 0;
  for (let i in nums) {
    console.log("Test i", i);
    if (nums[i] !== 0) {
      [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
      pointer++;
    }
  }
  return nums;
};
console.log("test move zeros", moveZeroes([0, 1, 0, 3, 12]));
