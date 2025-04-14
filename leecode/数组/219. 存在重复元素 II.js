/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let tempMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (tempMap.has(nums[i])) {
      if (Math.abs(tempMap.get(nums[i]) - i) <= k) return true;
    }
    tempMap.set(nums[i], i);
  }
  return false;
};
