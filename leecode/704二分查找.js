/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
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

    return -1

};