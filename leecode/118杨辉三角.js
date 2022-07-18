/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // 题设条件 numRows >= 1,直接设结果数组里有一个[1]
    let ans = [
        [1]
    ]

    // 循环遍历，i 从 1 开始，因为不用考虑 i = 0
    for (let i = 1; i < numRows; i++) {
        // 临时一维数组存储新的一行的值
        let temp = []
        // 拿出数组中的最后一行分别在首尾加 0
        let arr1 = [...ans[ans.length - 1]]
        let arr2 = [...ans[ans.length - 1]]
        arr1.push(0)
        arr2.unshift(0)

        // 循环 2 个加 0 后的数组
        for (let k = 0; k < arr1.length; k++) {
            temp.push(arr1[k] + arr2[k])
        }
        // 把一维数组加到二维数组的末尾
        ans.push(temp)
    }
    return ans
};

console.log(generate(5));

// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]