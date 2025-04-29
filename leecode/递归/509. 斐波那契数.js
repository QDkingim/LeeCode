/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 基本情况：如果n是0或1，直接返回n
  if (n === 0 || n === 1) return n;

  // 递归计算斐波那契数
  return fib(n - 1) + fib(n - 2);
};

/**
 * 斐波那契数列的定义：
 * F(0) = 0, F(1) = 1
 * F(n) = F(n-1) + F(n-2) 当 n > 1 时
 *
 */
