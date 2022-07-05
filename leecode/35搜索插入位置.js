/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


// 总共有如下四种情况
// 目标值在数组所有元素之前
// 目标值等于数组中某一个元素
// 目标值插入数组中的位置
// 目标值在数组所有元素之后


var searchInsert = function (nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] >= target) {
    //         return i
    //     }

    // }
    // return nums.length

    let low = 0
    let heigh = nums.length - 1
    while (low <= heigh) {
        let mid = low + Math.floor((heigh - low) / 2)
        if (nums[mid] < target) {
            low = mid + 1
        } else if (nums[mid] > target) {
            heigh = mid - 1
        } else {
            return mid
        }
    }

    // 分别处理如下四种情况
    // 目标值在数组所有元素之前  [0, -1]
    // 目标值等于数组中某一个元素  return middle;
    // 目标值插入数组中的位置 [left, right]，return  right + 1
    // 目标值在数组所有元素之后的情况 [left, right]， 因为是右闭区间，所以 return right + 1
    return heigh + 1
};