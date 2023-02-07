/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // [-1, 0, 1, 2, -1, -4]
  // [-4, -1, -1, 0, 1, 2]
  // brute for solution for O(N^3)
  //
  // create a result array
  // if nums.length is less than 3 return result
  // first sort the array so that it will be easy to find the duplicate
  // loop through the array with i = 0; second loop with j = i+ 1, and third with (j+1)
  // if(adding these three makes upto 0, push it to array)

  const result = [];
  const numsLength = nums.length;
  if (numsLength < 3) return result;

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < numsLength; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    for (let j = i + 1; j < numsLength; j++) {
      if (j > i + 1 && nums[j - 1] === nums[j]) continue;
      for (let k = j + 1; k < numsLength; k++) {
        if (k > j + 1 && nums[k - 1] === nums[k]) continue;
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
};

console.log("test threeSum", threeSum([-1, 0, 1, 2, -1, -4]));
