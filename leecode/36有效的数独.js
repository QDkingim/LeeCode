/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let row = new Array(9).fill(0).map(() => new Array(10).fill(0))
    let col = new Array(9).fill(0).map(() => new Array(10).fill(0))
    let box = new Array(9).fill(0).map(() => new Array(10).fill(0))

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue
            let currentNum = parseInt(board[i][j]) // 将字符转换为数字
            if (row[i][currentNum]) return false // 判断每行中是否有重复数字，有则直接返回false
            if (col[j][currentNum]) return false // 判断每列中是否有重复数字，有则直接返回false
            if (box[Math.floor(j / 3) + Math.floor((i / 3)) * 3][currentNum]) return false // 判断第几个box中有无该元素，有的话说明重复直接返回false

            row[i][currentNum] = 1
            col[j][currentNum] = 1
            box[Math.floor(j / 3) + Math.floor((i / 3)) * 3][currentNum] = 1
        }
    }
    return true
};

// console.log(isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]));