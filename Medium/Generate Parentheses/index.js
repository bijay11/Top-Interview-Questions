/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const output = [];

  const dfs = (str, leftPrmCount, rightPrmCount) => {
    if (leftPrmCount > rightPrmCount) return;

    if (!leftPrmCount && !rightPrmCount) return output.push(str);
    if (leftPrmCount > 0) dfs(`${str}(`, leftPrmCount - 1, rightPrmCount);
    if (rightPrmCount > 0) dfs(`${str})`, leftPrmCount, rightPrmCount - 1);
  };
  dfs("", n, n);
  return output;
};

console.log("test generateParenthesis", generateParenthesis(2));
