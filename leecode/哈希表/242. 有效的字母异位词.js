/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
这道题是判断两个字符串是否为有效的字母异位词。字母异位词指的是两个字符串包含相同的字母,但字母顺序可以不同。
例如:"anagram" 和 "nagaram" 是字母异位词。

解题思路:
1. 首先判断两个字符串长度是否相等,不相等直接返回 false
2. 使用 Map 数据结构记录每个字符出现的次数:
   - 遍历字符串 s 时,对应字符次数 +1 
   - 遍历字符串 t 时,对应字符次数 -1
3. 最后检查 Map 中所有的值是否都为 0:
   - 如果都为 0,说明两个字符串包含的字符及次数完全相同,返回 true
   - 如果有不为 0 的值,说明字符出现次数不一致,返回 false

时间复杂度: O(n),其中 n 是字符串的长度
空间复杂度: O(S),其中 S 是字符集大小
*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    map.set(t[i], (map.get(t[i]) || 0) - 1);
  }
  return Array.from(map.values()).every(count => count === 0);
};
