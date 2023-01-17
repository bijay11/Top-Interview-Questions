/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const input = [2, 7, 11, 15];
const target = 9;
var twoSum = function (nums, target) {
  if (!nums.length) return [];
  const hashTable = {};
  let numsToFind;
  for (let i = 0; i < nums.length; i++) {
    numsToFind = target - nums[i];
    if (numsToFind in hashTable) {
      return [hashTable[numsToFind], i];
    }
    hashTable[nums[i]] = i;
  }
  return [];
};

console.log(twoSum(input, target));
