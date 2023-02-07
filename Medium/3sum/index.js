/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const results = [];
  const numsLength = nums.length;
  if (numsLength < 3) return results;

  // if the array is sorted, then it will be easy to find duplicates.
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < numsLength; i++) {
    // if nums[i] is same as nums [i-1], we dont need to compute
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    // nums [i] + nums [j] + nums [k] === 0
    // i.e. nums [j] + nums [k] === 0 - nums [i]
    // which means nums[j] and nums [k] can be any combination.
    const target = 0 - nums[i];
    let left = i + 1;
    let right = numsLength - 1;
    while (right > left) {
      const sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        // after pushing left, if the same nums exist, increase left
        while (nums[left] === nums[left + 1]) left++;

        // after pushing right, if the same nums exist, decrease right
        while (nums[right] === nums[right - 1]) right--;

        // at this point, all the duplicates are skipped, so lets increase left and decrease right
        left++;
        right--;
      }
    }
  }
  return results;
};

console.log("test threeSum", threeSum([-1, 0, 1, 2, -1, -4]));
