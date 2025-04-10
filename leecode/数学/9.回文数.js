/**
 * 判断一个整数是否是回文数
 * 解题思路：
 * 1. 负数一定不是回文数
 * 2. 个位数一定是回文数
 * 3. 末尾为0的数一定不是回文数（除了0本身）
 * 4. 对于其他数字，我们可以通过反转后半部分数字来判断：
 *    - 将数字的后半部分反转
 *    - 当原始数字小于或等于反转后的数字时，说明已经处理了一半以上的数字
 *    - 最后比较原始数字的前半部分和反转后的后半部分是否相等
 * 
 * 时间复杂度：O(log n)，其中 n 是输入数字
 * 空间复杂度：O(1)，只需要一个变量存储反转后的数字
 * 
 * @param {number} x 输入的整数
 * @return {boolean} 是否是回文数
 */
var isPalindrome = function(x) {
    // 负数一定不是回文数
    if (x < 0) return false;
    // 个位数一定是回文数
    if (x < 10) return true;
    // 末尾为0的数一定不是回文数（除了0本身）
    if (x % 10 === 0) return false;
    
    // 用于存储反转后的数字
    let rev = 0;
    
    // 当原始数字大于反转后的数字时，继续处理
    while (x > rev) {
        // 将原始数字的最后一位添加到反转数字的末尾
        rev = rev * 10 + x % 10;
        // 去掉原始数字的最后一位
        x = Math.floor(x / 10);
    }
    
    // 判断是否是回文数：
    // 1. 如果数字长度为偶数，直接比较x和rev是否相等
    // 2. 如果数字长度为奇数，需要去掉rev的最后一位（中间的数字）再比较
    return x === rev || x === Math.floor(rev / 10);
};
