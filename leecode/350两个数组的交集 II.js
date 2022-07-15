/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//     /**
//      * 思路一:遍历num1中的值,看看在num2中出现几次，如出现2次或2次以上，就遍历num1看看该值在num1中出现几次，取2者之中小的次数，写入结果数组中
//      * 
//      */

//     let result = []; // 返回数组
//     let sum = 0
//     let x = 0
//     for (let i = 0; i < nums1.length; i++) {
//         let sum1 = 0,
//             sum2 = 0; // 判断在num1和num2中出现的次数

//         if (result.length !== 0) {
//             let flag = 0
//             for (let a = 0; a < result.length; a++) {
//                 if (nums1[i] !== result[a]) {
//                     flag++
//                 }
//             }
//             if (flag === result.length) {
//                 for (let j = 0; j < nums2.length; j++) {
//                     if (nums1[i] === nums2[j]) {
//                         sum2++
//                     }
//                 }
//             }

//         } else {
//             for (let j = 0; j < nums2.length; j++) {
//                 if (nums1[i] === nums2[j]) {
//                     sum2++
//                 }
//             }
//         }



//         if (sum2 > 0) {
//             nums1.forEach(item => {
//                 if (item === nums1[i]) {
//                     sum1++
//                 }
//             })
//         }

//         min = Math.min(sum1, sum2)

//         sum += min

//         for (x; x < sum; x++) {
//             result.push(nums1[i])
//         }

//         x = sum
//     }

//     return result

// };

var intersect = function (nums1, nums2) {
    /**
     * 思路二：哈希表
     */
    let result = []
    let map = new Map()

    for (let i = 0; i < nums1.length; i++) {
        if (map.has(nums1[i])) {
            let num = map.get(nums1[i])
            num++
            map.set(nums1[i], num)
        } else {
            map.set(nums1[i], 1)
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i]) && map.get(nums2[i]) !== 0) {
            result.push(nums2[i])
            let num = map.get(nums2[i])
            num--
            map.set(nums2[i], num)
        }
    }

    return result

}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));