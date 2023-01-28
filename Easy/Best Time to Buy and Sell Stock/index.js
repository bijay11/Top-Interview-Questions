// Input: prices = [7, 1, 5, 3, 6, 4];
// Output: 5;

var maxProfit = function (prices) {
  // is it all positive integers?
  // is zero a real case?
  // can prices array contain only one element i.e. just one day?
  // if prices has only one item, return zero
  // create variable for BuyPrice and sellPrice
  // set BuyPrice to prices[0]
  // if there is a next price lower, subsitute it
  // set sellPrice to zero
  // if the arr[n] is greater then arr[n-1], set sellPrice to arr[n]
  // keep substituting until max found
  // if positive, return the difference or return 0
  //
  // create variable for buy price, sellprice and a pointer
  // while loop
  const pricesLength = prices.length;
  if (!pricesLength || pricesLength === 1) return 0;

  let left = 0;
  let right = 1;
  let profit = 0;
  let maxProfit = 0;

  while (right < pricesLength) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    }
    if (prices[left] >= prices[right]) {
      left = right;
    }
    right++;
  }
  return maxProfit;
};

console.log("est maxProfit", maxProfit([7, 1, 5, 3, 6, 4]));
console.log("est maxProfit 1", maxProfit([7, 6, 4, 3, 1]));
console.log("est maxProfit 2", maxProfit([1, 2]));
console.log("est maxProfit 3", maxProfit([2, 1, 2, 1, 0, 1, 2]));
console.log("est maxProfit 4", maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));
