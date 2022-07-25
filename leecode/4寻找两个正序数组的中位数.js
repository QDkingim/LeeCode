/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
 * 有三种情况：
 *  1.中位数在num1数组中
 *  2.中位数在num2数组中
 *  3.中位数在2个数组的数结合中
 * 思路一：合并两个数组后排序，然后取新数组的中位数
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    let num12 = [...nums1, ...nums2].sort((a, b) => b - a)
    let zw12 = Math.floor(num12.length / 2)
    if (num12.length % 2 === 0) {
        ans = (num12[zw12 - 1] + num12[zw12]) / 2
    } else {
        ans = num12[zw12]
    }

    return ans
};




console.log(findMedianSortedArrays([1, 2], [3, 4]));