/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  // 1. 沿主对角线翻转矩阵
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // 交换 matrix[i][j] 和 matrix[j][i]
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 2. 对每一行进行水平翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      // 交换 matrix[i][j] 和 matrix[i][n-1-j]
      [matrix[i][j], matrix[i][n - 1 - j]] = [
        matrix[i][n - 1 - j],
        matrix[i][j],
      ];
    }
  }
};
