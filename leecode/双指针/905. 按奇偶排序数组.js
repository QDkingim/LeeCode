/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 解题思路：
// 使用两个指针：left 从数组开头开始，right 从数组末尾开始
// 当 left 指向偶数时，left 右移
// 当 right 指向奇数时，right 左移
// 当 left 指向奇数且 right 指向偶数时，交换这两个元素
// 重复上述步骤直到 left >= right
var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] % 2 === 0) {
      left++;
    } else if (nums[right] % 2 === 1) {
      right--;
    } else {
      // 交换奇数和偶数
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
  return nums;
};
