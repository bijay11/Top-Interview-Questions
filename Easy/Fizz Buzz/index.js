/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  // Input: n = 3
  // Output: ["1","2","Fizz"]
  // Example 2:
  // Input: n = 5
  // Output: ["1","2","Fizz","4","Buzz"]

  // create a for loop
  // if divisible by both 3 and 5, return "FizzBuzz"
  // if n[i] is divisible by 3 return Fizz, if divisible by 5, return "Buzz"
  // create a variable and story empty array
  // add n[i] val in the array

  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(`${i}`);
    }
  }
  return result;
};

console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
