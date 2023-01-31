/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // loop through array
  // make a hashTable and store the element as true
  //  make a condition if(see) return true
  // retun false after the loop is finished

  // if nums is empty of nums length is 1, return false
  if (nums.length < 2) return false;

  const seen = {};

  for (let element of nums) {
    if (seen[element]) return true;
    seen[element] = true;
  }
  return false;
};

console.log("test ", containsDuplicate([1, 2, 3, 1]));
console.log("test ", containsDuplicate([1, 2, 3, 4]));
console.log("test ", containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
