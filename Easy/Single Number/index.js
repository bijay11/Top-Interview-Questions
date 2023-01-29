var singleNumber = function (nums) {
  // nums is never empty
  // every element appears twice except one (return that number)
  // create a hashMap
  // add key as elment of array and set it to false
  // if the element is found again, set it to true
  // loop through hashMap and then return the one with false value

  if (nums.length === 1) return nums[0];

  const hashMap = {};

  for (let num of nums) {
    if (num in hashMap) {
      hashMap[num] = true;
    } else {
      hashMap[num] = false;
    }
  }
  for (let key in hashMap) {
    if (!hashMap[key]) {
      return key;
    }
  }

  // or USING REDUCE
  // return nums.reduce((prev, curr) => prev ^ curr);
};

console.log("test", singleNumber([4, 1, 2, 1, 2]));

// [4,1,2,1,2]
