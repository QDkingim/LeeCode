/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    const n = s.length;
    const result = new Array(n).fill(Infinity);
    
    // 第一遍从左向右遍历，计算每个位置到左侧最近的字符 c 的距离
    let prev = -Infinity; // 上一个字符 c 的位置
    for (let i = 0; i < n; i++) {
        if (s[i] === c) {
            prev = i;
        }
        result[i] = i - prev;
    }
    
    // 第二遍从右向左遍历，计算每个位置到右侧最近的字符 c 的距离，并取最小值
    prev = Infinity; // 重置为下一个字符 c 的位置
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === c) {
            prev = i;
        }
        result[i] = Math.min(result[i], prev - i);
    }
    
    return result;
};