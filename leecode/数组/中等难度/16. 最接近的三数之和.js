/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 对数组进行排序
  nums.sort((a, b) => a - b);

  // 初始化最接近的和为前三个数的和
  let closestSum = nums[0] + nums[1] + nums[2];

  // 遍历数组
  for (let i = 0; i < nums.length - 2; i++) {
    // 如果当前元素与前一个元素相同，跳过以避免重复计算
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 定义左右指针
    let left = i + 1;
    let right = nums.length - 1;

    // 使用双指针寻找最接近的和
    while (left < right) {
      // 计算当前三数之和
      const currentSum = nums[i] + nums[left] + nums[right];

      // 如果当前和等于目标值，直接返回
      if (currentSum === target) {
        return currentSum;
      }

      // 更新最接近的和
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      // 根据当前和与目标值的关系移动指针
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
};
