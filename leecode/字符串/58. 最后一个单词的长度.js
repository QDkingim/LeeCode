/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // 去除字符串两端的空格
  s = s.trim();
  // 将字符串按空格分割成数组
  const arr = s.split(" ");
  // 返回最后一个单词的长度
  return arr[arr.length - 1].length;
};

// 暴力解法 自主完成
var lengthOfLastWord = function (s) {
  // 去除字符串两端的空格
  s = s.trim();
  // 遍历字符串
  for (let i = s.length - 1; i >= 0; i--) {
    // 如果当前字符不是空格，则返回当前字符的长度
    if (s[i] !== " ") {
      return s.length - i;
    }
  }
};
