/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // count = nums.length
  // loop, 9-0 = 9, is it there? yes
  // 9-1 = 8? is it there? no, return 8
  // Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
  // store the value till nums.length in hashTable
  //loop through the array and find if the element exists in hashTable, if it is, decrement the value,
  // return the object key with value of 1

  if (!nums) return 0;

  const storeNum = {};
  for (let i = 0; i <= nums.length; i++) {
    // since its unique numbers, we dont need to add
    storeNum[i] = 1;
  }

  for (let num of nums) {
    if (storeNum[num]) storeNum[num]--;
  }

  for (let key in storeNum) {
    if (storeNum[key]) return key;
  }
};

console.log(missingNumber([3, 0, 1]));

// Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// Output: 8;
