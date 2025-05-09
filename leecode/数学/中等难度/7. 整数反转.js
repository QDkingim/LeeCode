/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 定义32位有符号整数的范围
    const MAX_INT = Math.pow(2, 31) - 1;  // 2147483647
    const MIN_INT = -Math.pow(2, 31);     // -2147483648
    
    // 记录结果和符号
    let result = 0;
    const sign = x < 0 ? -1 : 1;
    
    // 取绝对值进行处理
    x = Math.abs(x);
    
    // 循环处理每一位数字
    while (x > 0) {
        // 获取最后一位数字
        const digit = x % 10;
        
        // 检查是否会溢出
        // 如果 result > MAX_INT/10，那么 result*10 一定会溢出
        // 如果 result === MAX_INT/10，那么需要检查最后一位数字是否会导致溢出
        if (result > Math.floor(MAX_INT / 10) || 
            (result === Math.floor(MAX_INT / 10) && digit > MAX_INT % 10)) {
            return 0;
        }
        
        // 更新结果
        result = result * 10 + digit;
        // 移除已处理的最后一位
        x = Math.floor(x / 10);
    }
    
    // 返回带符号的结果
    return result * sign;
};