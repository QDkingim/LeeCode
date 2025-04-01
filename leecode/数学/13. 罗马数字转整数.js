/**
 * 罗马数字转整数
 * 解题思路：
 * 1. 罗马数字的规则：
 *    - 基本数字：I(1), V(5), X(10), L(50), C(100), D(500), M(1000)
 *    - 特殊规则：当小数字在大数字左边时，需要减去小数字
 * 2. 实现方法：
 *    - 从左到右遍历字符串
 *    - 比较当前数字和下一个数字的大小
 *    - 如果当前数字小于下一个数字，则减去当前数字
 *    - 如果当前数字大于等于下一个数字，则加上当前数字
 * 
 * @param {string} s - 输入的罗马数字字符串
 * @return {number} - 转换后的整数
 */
var romanToInt = function (s) {
  // 定义罗马数字到整数的映射表
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
  let result = 0; // 存储最终结果
  
  // 遍历罗马数字字符串
  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];     // 获取当前字符对应的数字
    const next = romanMap[s[i + 1]];    // 获取下一个字符对应的数字
    
    // 根据罗马数字规则进行判断
    if (current < next) {
      // 如果当前数字小于下一个数字，需要减去当前数字
      // 例如：IV = 5-1 = 4
      result -= current;
    } else {
      // 如果当前数字大于等于下一个数字，直接加上当前数字
      // 例如：VI = 5+1 = 6
      result += current;
    }
  }
  
  return result;
};
