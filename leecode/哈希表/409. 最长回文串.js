/**
 * @param {string} s
 * @return {number}
 */
/*
这道题是求解给定字符串能构造的最长回文串的长度。

解题思路:
1. 使用 Map 统计每个字符出现的次数
2. 遍历字符出现次数:
   - 如果字符出现偶数次,可以全部用于构造回文串
   - 如果字符出现奇数次,可以使用 count-1 个字符(变成偶数)
   - 所有奇数次字符中,可以取其中一个字符放在回文串中间
3. 最终回文串长度 = 所有偶数次字符数 + 所有奇数次字符转成偶数后的字符数 + 1个中间字符(如果有奇数次字符)

时间复杂度: O(n),其中 n 是字符串的长度
空间复杂度: O(S),其中 S 是字符集大小
*/

var longestPalindrome = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  let result = 0;
  let odd = 0;
  for (const count of map.values()) {
    if (count % 2 === 0) {
      result += count;
    } else {
      result += count - 1;
      odd = 1;
    }
  }
  return result + odd;
};
