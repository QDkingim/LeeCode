/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
 * 动态规划
 * 对于网格中的每个位置，到达该位置的最小路径和等于：
 * 当前位置的值 + min(上方格子的最小路径和, 左方格子的最小路径和)
 * 对于第一行和第一列的特殊情况，只能从左边或上边到达
 * 最终右下角的值就是我们要求的最小路径和
 */

var minPathSum = function (grid) {
  // 获取网格的行数和列数
  const m = grid.length;
  const n = grid[0].length;

  // 创建dp数组，用于存储到达每个位置的最小路径和
  const dp = Array(m)
    .fill()
    .map(() => Array(n).fill(0));

  // 初始化第一个位置
  dp[0][0] = grid[0][0];

  // 初始化第一行
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // 初始化第一列
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // 填充dp数组
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 当前位置的最小路径和 = 当前位置的值 + min(上方格子的最小路径和, 左方格子的最小路径和)
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  // 返回右下角的值，即为最小路径和
  return dp[m - 1][n - 1];
};
