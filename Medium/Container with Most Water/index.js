/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // set left to 0 and right to arr.length -1
  // declare variable for container, currentContaier, width, and length
  // create a while loop (left < right)
  // calculate the currentContainer (Math.min(height[left], height[right])) * right -left
  // compare currentContainer and container and make container the biggest of comparision
  // if left is smaller, increase left, if right is smaller, decrease right

  let left = 0;
  let right = height.length - 1;
  let maxContainer = 0;
  let currentContainer = 0;
  let length = 0;
  let width = 0;

  while (left < right) {
    length = Math.min(height[left], height[right]);
    width = right - left;
    currentContainer = length * width;
    maxContainer = Math.max(maxContainer, currentContainer);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxContainer;
};

// console.log("test maxArea", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("test maxArea 1", maxArea([2, 3, 4, 5, 18, 17, 6]));
// first is 6 and 2 ==> 2 * (6-0) = 12
// second is 3 and 6 ==> 3 * (6-1) = 15
// third is 4 and 6 ==> 4 * (6-2) = 16
// fourth is 5 and 6 ==> 5* (6-3) = 15
// fifth is 18 and 6 ===> 6 * (6-4) = 12;
// now right is 17
// sixth is 18 and 17 === > 17 *
