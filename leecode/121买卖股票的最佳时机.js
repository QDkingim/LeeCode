/**
 * @param {number[]} prices
 * @return {number}
 */

// 暴力算法（超时了）
// var maxProfit = function (prices) {
//     let profitMax = 0 // 利润
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[j] - prices[i] > 0) { // 后一天的价格比前一天的大
//                 let profit = prices[j] - prices[i]
//                 profitMax = profit > profitMax ? profit : profitMax
//             }
//         }
//     }

//     return profitMax
// };


// 一次遍历
// var maxProfit = function (prices) {
//     let profitMax = 0
//     let minPrice = 10000
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < minPrice) {
//             minPrice = prices[i]
//         } else if (profitMax < prices[i] - minPrice) {
//             profitMax = prices[i] - minPrice
//         }
//     }
//     return profitMax
// };

// 动态规划
var maxProfit = function (prices) {
    let profitMax = 0
    
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));