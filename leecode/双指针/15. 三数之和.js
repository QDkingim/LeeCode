/**
 * 三数之和
 * @param {number[]} nums - 输入的整数数组
 * @return {number[][]} - 返回所有和为0且不重复的三元组
 */

/**
 * 算法思路：
 * 首先对数组进行排序，这样我们可以使用双指针的方法
 * 固定一个数 nums[i]，然后在剩余部分使用双指针寻找另外两个数
 * 使用 left 和 right 指针分别指向剩余部分的开始和结束
 * 主要步骤：
 * 排序数组
 * 遍历数组，固定第一个数 nums[i]
 * 使用双指针 left 和 right 在剩余部分寻找另外两个数
 * 如果三数之和等于0，记录结果并移动指针
 * 如果和小于0，移动左指针
 * 如果和大于0，移动右指针
 * 去重处理：
 * 在固定第一个数时，如果当前数和前一个数相同，则跳过
 * 在找到符合条件的组合后，跳过重复的数字
 */

var threeSum = function (nums) {
  // 存储最终结果的数组
  const result = [];

  // 首先对数组进行排序，这是使用双指针的前提条件
  // 排序后可以方便地控制指针移动方向
  nums.sort((a, b) => a - b);

  // 遍历数组，固定第一个数
  // nums.length - 2 是因为我们需要至少三个数
  for (let i = 0; i < nums.length - 2; i++) {
    // 如果当前数字和前一个数字相同，跳过以避免重复
    // i > 0 确保不会跳过第一个数字
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 初始化双指针
    // left 指向当前固定数字的下一个位置
    // right 指向数组末尾
    let left = i + 1;
    let right = nums.length - 1;

    // 当左指针小于右指针时，继续寻找
    while (left < right) {
      // 计算三个数的和
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // 如果和为0，找到一组解
        result.push([nums[i], nums[left], nums[right]]);

        // 跳过重复的数字，避免重复解
        // 移动左指针，直到遇到不同的数字
        while (left < right && nums[left] === nums[left + 1]) left++;
        // 移动右指针，直到遇到不同的数字
        while (left < right && nums[right] === nums[right - 1]) right--;

        // 继续寻找其他可能的解
        left++;
        right--;
      } else if (sum < 0) {
        // 如果和小于0，说明需要更大的数，移动左指针
        left++;
      } else {
        // 如果和大于0，说明需要更小的数，移动右指针
        right--;
      }
    }
  }

  // 返回所有找到的三元组
  return result;
};
