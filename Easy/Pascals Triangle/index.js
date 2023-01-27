//Constraints 1 <= numRows <= 30
// Input: numRows = 5;
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

// it generates 1 array and 5 sub arrays
// i.e. numsRows is equal to sub array

// calculation
// first element and last element is always same
// [1]
// [1, 1] -- > [1, 1] from ^^
//[1, 2, 1] --> [1, 1+1, 1]
// [1, 3, 3, 1] --> [1, 1+2,2+1, 1]
// [1, 4, 6, 4, 1]-->[1, 1+3, 3+3, 3+1, 1]

// computation
// arr[0] and arr[length -1] is always 1
//we need to find the values of inbetween

var generate = function (numRows) {
  //what is numsRows is 0, return empty array probably
  //what is numsRows is 1, return [1]
  // create a variable to store array  [[1]]
  //  create a for loop and starts with 1
  // loop till length -1
  // value of arr[n] is arr[n-1] + arr [n+1]

  let newArr = [];
  if (!numRows) return newArr;
  if (numRows === 1) return [[1]];

  newArr = [[1]];

  for (let i = 1; i <= numRows - 1; i++) {
    const lastArr = newArr[i - 1];
    const lastarrLength = lastArr.length;
    newArr[i] = [1];
    for (let j = 1; j < lastarrLength; j++) {
      newArr[i].push(lastArr[j - 1] + lastArr[j]);
    }
    newArr[i].push(1);
  }
  return newArr;
};

console.log(generate(5));
