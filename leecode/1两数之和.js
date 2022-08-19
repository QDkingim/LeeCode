/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 思路一：循环遍历2次数组，穷举法
 * 
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// console.log(twoSum([2, 5, 5, 11], 10));