/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 方法一：求和法
  // 思路：计算0到n的理论总和，减去数组实际总和，差值就是缺失的数字
  const n = nums.length;
  // 0到n的理论总和：n*(n+1)/2
  const expectedSum = n * (n + 1) / 2;
  // 计算数组实际总和
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  // 返回差值
  return expectedSum - actualSum;
};

/**
 * 方法二：位运算法（异或）
 * 思路：利用异或运算的特性，a^a=0，a^0=a
 * 对0到n的所有数字和数组中的所有数字进行异或操作，
 * 相同的数字会抵消，最后剩下的就是缺失的数字
 */
var missingNumberXOR = function (nums) {
  let result = nums.length; // 先把n异或上
  
  // 将索引和对应的值都异或到result上
  for (let i = 0; i < nums.length; i++) {
    result ^= i ^ nums[i];
  }
  
  return result;
};

/**
 * 方法三：数组标记法
 * 思路：将数组中的每个数字放到对应的索引位置，
 * 然后遍历修改后的数组，找出不等于索引的位置
 */
var missingNumberMark = function (nums) {
  const n = nums.length;
  const arr = new Array(n + 1).fill(-1);
  
  // 将nums中的每个数字标记到arr对应位置
  for (let i = 0; i < n; i++) {
    arr[nums[i]] = nums[i];
  }
  
  // 查找未被标记的位置
  for (let i = 0; i <= n; i++) {
    if (arr[i] === -1) {
      return i;
    }
  }
  
  // 不会执行到这里，因为题目保证有唯一解
  return -1;
};

