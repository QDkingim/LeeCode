/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * 
 *思路1循环遍历2次数组，分别对比数组中的每个元素是否相等，时间复杂度o(n2) 空间复杂度O(1)
 * 
 */
// var containsDuplicate = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// };

/**
 * 
 * 思路二：哈希表
 *      对于数组中每个元素，我们将它插入到哈希表中。
 *      如果插入一个元素时发现该元素已经存在于哈希表中，则说明存在重复法元素
 * 
 */

var containsDuplicate = function (nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true
        } else {
            set.add(nums[i])
        }
    }
    return false
};


// console.log(containsDuplicate([1, 2, 3, 1]));