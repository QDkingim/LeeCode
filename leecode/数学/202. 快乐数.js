/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // 使用 Set 来存储已经出现过的数字，用于检测循环
    const seen = new Set();
    
    // 当 n 不为 1 且未出现过时，继续循环
    while (n !== 1 && !seen.has(n)) {
        // 将当前数字加入已见集合
        seen.add(n);
        
        // 计算下一个数字
        n = getNext(n);
    }
    
    // 如果最终结果为 1，则为快乐数
    return n === 1;
};

/**
 * 计算一个数字各位数字的平方和
 * @param {number} n
 * @return {number}
 */
function getNext(n) {
    let sum = 0;
    while (n > 0) {
        // 获取个位数
        const digit = n % 10;
        // 累加平方和
        sum += digit * digit;
        // 去掉个位数
        n = Math.floor(n / 10);
    }
    return sum;
}
