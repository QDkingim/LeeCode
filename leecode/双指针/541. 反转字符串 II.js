/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
/*
    这道题是反转字符串 II,给定一个字符串s和整数k,每隔2k个字符,反转前k个字符。
    解题思路:
    
    使用for循环每隔2k个字符进行处理
    设置left和right指针，在每次需要反转的k个字符范围内进行交换
    通过Math.min(i + k - 1, s.length - 1)确保right指针不会越界
    使用解构赋值[arr[left], arr[right]] = [arr[right], arr[left]]实现字符交换
    反转完成后，将数组重新合并为字符串返回
*/
var reverseStr = function (s, k) {
  // 将字符串转为数组，方便操作
  const arr = s.split("");

  // 每隔2k个字符，反转前k个字符
  for (let i = 0; i < s.length; i += 2 * k) {
    // 确定当前需要反转的子串的开始和结束位置
    let left = i;
    // 确保right不超过字符串长度或当前子串的前k个字符
    let right = Math.min(i + k - 1, s.length - 1);

    // 双指针反转字符
    while (left < right) {
      // 交换字符
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  // 将数组转回字符串返回
  return arr.join("");
};
