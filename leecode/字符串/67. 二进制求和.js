/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 将两个二进制字符串转换为十进制数
    const num1 = parseInt(a, 2);
    const num2 = parseInt(b, 2);
    // 将两个十进制数相加
    const sum = num1 + num2;
    return sum.toString(2);  // 使用toString(2)将十进制数转换为二进制字符串
};

