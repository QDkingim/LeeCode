/**
 * @param {number[]} nums
 * @return {number}
 */


/**
 * 
 * 思路一：动态规划
 * 
 * 
 * 思路二：分治
 * 
 * 
 * 思路三：贪心算法
 */

// 思路三:贪心算法
// var maxSubArray = function (nums) {
//     let currentSum = 0
//     let maxSum = -10000
//     let beforeSum = -10000
//     for (let i = 0; i < nums.length; i++) {
//         if (beforeSum < 0) {
//             currentSum = 0
//         }
//         currentSum += nums[i]
//         if (currentSum > maxSum) {
//             maxSum = currentSum
//         }
//         beforeSum = currentSum
//     }
//     return maxSum
// };



// 思路一：动态规划
var maxSubArray = function (nums) {
    let len = nums.length
    for (let i = 1; i < len; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
    }
    return Math.max(...nums)
}

// console.log(maxSubArray([5, 4, -1, 7, 8]));