/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // Example 1:
  // Input: nums1 = [1,2,2,1], nums2 = [2,2]
  // Output: [2,2]
  // Example 2:
  // Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  // Output: [4,9]
  // Explanation: [9,4] is also accepted.
  //
  //   What if the given array is already sorted? How would you optimize your algorithm?
  // What if nums1's size is small compared to nums2's size? Which algorithm is better?
  // What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
  //
  // create a variable with empty array
  // find the shortest array and store those values in hashTable
  // loop through the largest array and check if the element exist in hashTable
  // if it exists, add it to the array

  // check if both or one of the array is empty, is it is return empty array
  if (!nums1.length || !nums2.length) return [];
  const findIntersection = {};
  let intersection = [];

  for (let num of nums1) {
    findIntersection[num] = (findIntersection[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (findIntersection[num]) {
      findIntersection[num]--;
      intersection.push(num);
    }
  }
  return intersection;
};

console.log("Test intersect", intersect([1, 2, 2, 1], [2, 2]));
console.log("Test intersect 1", intersect([4, 9, 5], [9, 4, 9, 8, 4]));
