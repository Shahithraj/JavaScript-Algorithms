// Question 121.
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Answer
// 1. Brute Force Method

var maxProfit = function (prices) {
  let min = 100000;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let diff = prices[j] - prices[i];
      if (diff > profit) {
        profit = diff;
      }
    }
  }
  return profit;
};

// 2. Optimized one - with min price
var maxProfit = function (prices) {
  let min = 100000;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    let current = prices[i];
    if (min > current) {
      min = current;
    }
    profit = Math.max(current - min, profit);
  }
  return profit;
};

// 3. Optimized one - with max price
function stocks(arr) {
  let max = 0;
  let profit = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (max < arr[i]) {
      max = arr[i];
    }
    profit = Math.max(max - arr[i], profit);
  }
  console.log(profit);
}
stocks([10, 6, 5, 8, 9, 4, 3]);
