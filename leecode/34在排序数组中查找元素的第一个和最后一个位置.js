/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

var searchRange = function (nums, target) {
    let start = 0 // 记录目标值下标的开始位置
    let end = 0 // 记录目标值下标的结束位置
    let f = true // 记录是不是第一次碰到目标值 如果是true就是第一次碰到
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === target) {
            if (f) {
                if (index === nums.length - 1) {
                    return [index, index]
                }
                if (nums[index] !== nums[index + 1]) {
                    return [index, index]
                }
                start = index;
                f = false
            } else {
                end = index
            }
        }
    }
    if (start === 0 && end === 0 && f) {
        return [-1, -1]
    } else {
        return [start, end]
    }

};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([], 0))
console.log(searchRange([1, 4], 4))

 */

/* 
    转化为数学问题
    情况一：target 在数组范围的右边或者左边，例如数组{3, 4, 5}，target为2或者数组{3, 4, 5},target为6，此时应该返回{-1, -1}
    情况二：target 在数组范围中，且数组中不存在target，例如数组{3,6,7},target为5，此时应该返回{-1, -1}
    情况三：target 在数组范围中，且数组中存在target，例如数组{3,6,7},target为6，此时应该返回{1, 1}

    class Solution(object):
    def searchRange(self,nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        def left_func(nums,target):
            n = len(nums)-1
            left = 0
            right = n
            while(left<=right):
                mid = (left+right)//2
                if nums[mid] >= target:
                    right = mid-1
                if nums[mid] < target:
                    left = mid+1
            return left
        a =  left_func(nums,target)
        b = left_func(nums,target+1)
        if  a == len(nums) or nums[a] != target:
            return [-1,-1]
        else:
            return [a,b-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    function getLeft(nums, target) {
        let left = 0
        let right = nums.length - 1
        while (left <= right) {
            mid = Math.floor((left + right) / 2)
            if (target <= nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return left
    }

    start = getLeft(nums, target)
    end = getLeft(nums, target + 1)

    if (start === nums.length || nums[start] !== target) {
        return [-1, -1]
    } else {
        return [start, end - 1]
    }

};