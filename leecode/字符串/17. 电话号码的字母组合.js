/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  // 如果输入为空，则返回空数组
  if (!digits || digits.length === 0) {
    return [];
  }

  const result = [];

  // 回溯函数，index是当前处理的digits字符的索引，combination是当前已经形成的组合
  function backtrack(index, combination) {
    // 如果已经处理完所有数字，则将当前组合加入结果数组
    if (index === digits.length) {
      result.push(combination);
      return;
    }

    // 获取当前数字对应的所有可能字母
    const letters = map[digits[index]];

    // 对每个可能的字母进行回溯
    for (const letter of letters) {
      backtrack(index + 1, combination + letter);
    }
  }

  // 从第一个数字开始回溯
  backtrack(0, "");

  return result;
};

console.log(letterCombinations("23"));
