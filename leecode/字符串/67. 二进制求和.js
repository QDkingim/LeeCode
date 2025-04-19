/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 由于输入字符串可能很长(10000位),不能直接转换为数字,需要模拟二进制加法
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  // 从右向左遍历两个字符串,模拟二进制加法
  while (i >= 0 || j >= 0 || carry > 0) {
    // 获取当前位的值,如果已经遍历完则补0
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;

    // 计算当前位的和与进位
    const sum = digitA + digitB + carry;
    result = (sum % 2) + result; // 当前位的值
    carry = Math.floor(sum / 2); // 进位值

    i--;
    j--;
  }

  return result;
};
