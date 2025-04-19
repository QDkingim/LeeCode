/**
 * @param {string} haystack 主字符串
 * @param {string} needle 需要查找的子字符串
 * @return {number} 返回第一次出现的索引，未找到返回-1
 */
var strStr = function (haystack, needle) {
  // 如果要查找的子字符串为空，则返回0
  if (needle.length === 0) return 0;
  
  // 遍历主字符串
  for (let i = 0; i < haystack.length; i++) {
    // 如果当前字符与子字符串的第一个字符匹配
    if (haystack[i] === needle[0]) {
      // 使用slice方法从当前位置截取与子字符串等长的部分进行比较
      if (haystack.slice(i, i + needle.length) === needle) {
        // 如果完全匹配，返回当前索引位置
        return i;
      }
    }
  }
  // 未找到匹配项，返回-1
  return -1;
};

// 暴力解法 自主完成
var strStr = function(haystack, needle) {
  let neLen = needle.length
  let haLen = haystack.length
  if(neLen>haLen) return -1
  let flag = false
  for(let i=0;i<haLen;i++){
      for(let j=0;j<neLen;j++){
          if(haystack[j+i]===needle[j]){
              if(j===neLen-1) flag = true
              continue;
          }else{
              break;
          }
      }
      if(flag) return i
  }
      
  return -1
};

/**
 * KMP算法实现
 * @param {string} haystack 主字符串
 * @param {string} needle 需要查找的子字符串
 * @return {number} 返回第一次出现的索引，未找到返回-1
 * 
 * 时间复杂度：O(m+n)，其中m是主字符串长度，n是子字符串长度
 * 空间复杂度：O(n)，用于存储next数组
 */
var strStrKMP = function(haystack, needle) {
  if (needle.length === 0) return 0;
  
  // 计算模式串的前缀表（next数组）
  const getNext = (pattern) => {
    const next = new Array(pattern.length).fill(0);
    let j = 0;
    
    for (let i = 1; i < pattern.length; i++) {
      // 如果前后缀不匹配，回退j
      while (j > 0 && pattern[i] !== pattern[j]) {
        j = next[j - 1];
      }
      // 如果前后缀匹配，j向后移动
      if (pattern[i] === pattern[j]) {
        j++;
      }
      // 更新next数组
      next[i] = j;
    }
    
    return next;
  };
  
  const next = getNext(needle);
  let j = 0; // 模式串的索引
  
  // 主循环，遍历主字符串
  for (let i = 0; i < haystack.length; i++) {
    // 当前字符不匹配时，回退j
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    // 当前字符匹配时，j向后移动
    if (haystack[i] === needle[j]) {
      j++;
    }
    // 如果匹配完整个模式串，返回起始索引
    if (j === needle.length) {
      return i - needle.length + 1;
    }
  }
  
  return -1;
};

/**
 * 使用内置方法解法（JavaScript特有）
 * @param {string} haystack 主字符串
 * @param {string} needle 需要查找的子字符串
 * @return {number} 返回第一次出现的索引，未找到返回-1
 * 
 * 时间复杂度：取决于JavaScript的indexOf方法实现，通常为O(m)
 * 空间复杂度：O(1)
 */
var strStrBuiltIn = function(haystack, needle) {
  return haystack.indexOf(needle);
};