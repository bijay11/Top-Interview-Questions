/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
  // A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
  //
  //   Input: digits = "23";
  //   Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
  //
  //
  //
  // declare results array and set it to empty
  // if the digit is less than "2", return results
  // create a hashTable and store 2 as ['a','b','c'] likewise do the same for the rest
  // declear num and start with 1
  // create a recursion function and start with string length - 1
  //  on each iteration, increase num
  // if str[string length - num] equal 0, return str[string length - num]
  const results = [];
  if (+digits < 2) return results;

  const digitsLength = digits.length;

  const hashTable = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // dfs recursive helper
  const dfs = (index, letter) => {
    if (index === digitsLength) {
      results.push(letter);
      return;
    }
    const str = hashTable[digits[index]];
    for (const char of str) {
      dfs(index + 1, letter + char);
    }
  };

  dfs(0, "");
  return results;
};

console.log(letterCombinations("23"));
