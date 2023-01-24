/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let insertAtPos = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[insertAtPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// merge([1], 1, [], 0);
// merge([0], 0, [1], 1);
