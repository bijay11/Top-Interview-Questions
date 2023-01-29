var isPalindrome = function (s) {
  // convert all s to lowercase
  // remove all special characters
  //remove space
  // if s is empty or s has length of 1 return true
  // set left and right pointer
  // make left ++ and right --,
  // on each iteration, both the letters has to be same..
  // or else return false

  const str = s
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .join("")
    .toLowerCase();

  if (!str || str.length === 1) return true;

  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(
  "test isPalindrome ",
  isPalindrome("A man, a plan, a canal: Panama")
);
//console.log("test isPalindrome ", isPalindrome("race a car"));
