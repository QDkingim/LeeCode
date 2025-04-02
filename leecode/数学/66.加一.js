/**
 * 加一
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * @param {number[]} digits - 表示非负整数的数组
 * @return {number[]} - 加一后的结果数组
 *
 * 时间复杂度：O(n)，其中 n 是数组的长度
 * 空间复杂度：O(1)，因为我们是在原数组上进行修改
 */
var plusOne = function (digits) {
  // 从数组末尾开始遍历，模拟加一操作
  for (let i = digits.length - 1; i >= 0; i--) {
    // 如果当前数字小于9，直接加1并返回结果
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    // 如果当前数字是9，将其置为0，继续处理前一位
    digits[i] = 0;
  }
  // 如果所有位都是9，需要在数组最前面添加1
  // 例如：999 + 1 = 1000
  digits.unshift(1);
  return digits;
};
