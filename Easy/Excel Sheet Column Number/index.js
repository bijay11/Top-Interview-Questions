/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const columnLength = columnTitle.length;
  const asciiCodeBeforeA = 64;
  const valForColumnZ = 26;
  let columnNumber = 0;

  for (let i = 0; i < columnLength; i++) {
    let lastLetterIdx = columnLength - 1;
    let char = columnTitle[lastLetterIdx - i];

    const squareNum = valForColumnZ ** i;

    columnNumber += squareNum * (char.charCodeAt() - asciiCodeBeforeA);
  }
  return columnNumber;
};
// 26 * 0 * (66 - 64) -->
// console.log("test titleToNumber", titleToNumber("A"));
// console.log("test titleToNumber", titleToNumber("Z"));
// console.log("test titleToNumber", titleToNumber("AB"));
console.log("test titleToNumber", titleToNumber("ZY"));
// console.log("test titleToNumber", titleToNumber("FXSHRXW"));
// 2147483647
// 245846039
//         columnNumber += Math.pow(26, i) * (char.charCodeAt(0) - 64);

// YZ = 25 * (26 ^ 1) + 26 * (26 ^ 0);
// ZY = 26 * (26 ^ 0) + 25 * (26 ^ 1)
// XYZ = 24 * (26 ^ 2) + 25 * (26 ^ 1) + 26 * (26 ^ 0);
