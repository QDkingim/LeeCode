/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * 思路一:直接将num2里的元素插入num1的后面，然后再整体排序
 */
var merge = function (nums1, m, nums2, n) {
    if (n === 0) {
        return nums1
    }
    for (let i = m, j = 0; i < m + n; i++, j++) {
        nums1[i] = nums2[j]
    }
    return nums1.sort((a, b) => a - b)
};

/**
 * 思路二:双指针，用 p1 和 p2 分别指向num1和num2数组的第一个元素，比较2个值的大小，
 * 较小的一个写入sorted数组中，然后指针后移，再比较2个指针指向位置值的大小，循环往复
 */
var merge = function (nums1, m, nums2, n) {
    if (n === 0) {
        return nums1
    }
    let p1 = 0,
        p2 = 0,
        cur; // 分别指向num1和num2头部的指针
    let sorted = [] // 已排序的数组
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++]
        } else if (p2 === n) {
            cur = nums1[p1++]
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++]
        } else {
            cur = nums2[p2++]
        }
        sorted[p1 + p2 - 1] = cur
    }

    for (let j = 0; j < m + n; j++) {
        nums1[j] = sorted[j]
    }
    return nums1
};



console.log(merge([2, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));