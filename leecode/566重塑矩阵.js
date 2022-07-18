/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {

    let m = mat.length // 获取二维数组的行数
    let n = mat[0].length // 获取二维数组的列数

    // 先算出二维数组的长度，判断 r*c 是否等于二维数组的长度，若等于才重塑矩阵，否则返回原矩阵
    if (m * n !== r * c) {
        return mat
    }

    // 按需创建二维数组
    const ans = new Array(r).fill(0).map(() => new Array(c).fill(0))

    for (let x = 0; x < m * n; ++x) {
        ans[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n]
    }

    return ans
};


// console.log(matrixReshape([
//     [1, 2],
//     [3, 4]
// ], 1, 4));