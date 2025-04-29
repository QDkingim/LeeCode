/**
 * @param {number[]} height
 * @return {number}
 */

// 解题思路：
// 使用双指针法，一个指针在数组开头(left)，一个在数组末尾(right)
// 容器的水量由两个因素决定：
// 容器的宽度：right - left
// 容器的高度：min(height[left], height[right])
// 水量 = 宽度 * 高度
// 移动指针的策略：
// 如果 height[left] < height[right]，移动左指针
// 否则移动右指针
// 每次移动指针后，计算当前水量并更新最大值
// 当 left >= right 时结束循环
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    // 计算当前水量
    const currentWidth = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const currentWater = currentWidth * currentHeight;

    // 更新最大水量
    maxWater = Math.max(maxWater, currentWater);

    // 移动指针
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};
