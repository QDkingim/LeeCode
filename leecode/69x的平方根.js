/**
 * @param {number} x
 * @return {number}
 * 
 *  给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
    由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
    注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5
 * 
 * 
 */
var mySqrt = function (x) {
    let left = 0
    let right = x
    let ans = -1
    let mid = Math.floor((left + right) / 2)
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (mid * mid <= x) {
            left = mid + 1
            ans = mid
        } else {
            right = mid - 1
        }
    }
    return ans
};

console.log(mySqrt(9));