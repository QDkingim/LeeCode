/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
这道题是找到数组中所有未出现过的数字。

解题思路:
1. 使用 Map 统计每个数字出现的次数
2. 遍历 1 到 n 的数字,检查每个数字是否在 Map 中出现过
3. 如果未出现过,则加入结果数组
4. 最终返回结果数组

时间复杂度: O(n),其中 n 是数组的长度
空间复杂度: O(n),需要额外空间存储 Map
*/
var findDisappearedNumbers = function (nums) {
  const result = [];
  const n = nums.length;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (let i = 1; i <= n; i++) {
    if (!map.has(i)) {
      result.push(i);
    }
  }
  return result;
};
