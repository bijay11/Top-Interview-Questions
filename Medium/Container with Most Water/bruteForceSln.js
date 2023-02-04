/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // brute force solution
  // create a for loop of i and start it with 0
  // declare a variable container and initialize it with 0
  // create a for loop of j and start it with 1
  // inside nested for loop, create currentContainer =  Math.min(hight[i], height[j]) * (j-i)
  // container  = Math.max(container, currentContainer)
  // return container.
  const conHeight = height.length;
  if (conHeight <= 1) return null;
  let container = 0;
  let currentContainer = 0;
  let length = 0;
  let width = 0;
  for (let i = 0; i < conHeight; i++) {
    for (let j = 1; j < conHeight; j++) {
      length = Math.min(height[i], height[j]);
      width = j - i;
      currentContainer = length * width;
      container = Math.max(container, currentContainer);
    }
  }
  return container;
};

console.log("test maxArea", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
