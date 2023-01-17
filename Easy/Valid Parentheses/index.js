/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const strLength = s.length;

  // return true if empty string
  if (!strLength) return true;

  const firstEl = s[0];
  const lastEl = strLength - 1;

  // if there is an odd number, it means one of the brakets is missing
  if (strLength % 2 === 1) return false;

  // check if the first element is closing bracket first
  if (firstEl === ")" || firstEl === "}" || firstEl === "]") return false;

  // check if the last element is opening bracket first
  if (lastEl === "(" || lastEl === "{" || lastEl === "[") return false;

  // create hashMap what the opening tag should corresponds to
  const bracketPair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (let i = 0; i < strLength; i++) {
    // create variable to store current letter of string
    let current = s[i];

    // if current is "(" or "{" or "["
    // push  ")" or "}" or "]" to stack
    if (bracketPair[current]) {
      stack.push(bracketPair[current]);
    } else if (current !== stack.pop()) {
      return false;
    }
  }
  // if the stack is empty, return true, else false
  return !stack.length;
};

console.log("test isValid", isValid("({[]})"));
