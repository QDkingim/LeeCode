/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    /**
     * 思路一:遍历num1中的值,看看在num2中出现几次，如出现2次或2次以上，就遍历num1看看该值在num1中出现几次，取2者之中小的次数，写入结果数组中
     * 
     */

    let result = []; // 返回数组
    let sum = 0
    let x = 0
    for (let i = 0; i < nums1.length; i++) {
        let sum1 = 0,
            sum2 = 0; // 判断在num1和num2中出现的次数
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                sum2++
            }
        }
        if (sum2 > 1) {
            nums1.forEach(item => {
                if (item === nums1[i]) {
                    sum1++
                }
            })
        }

        min = Math.min(sum1, sum2)

        sum += min

        for (x; x < sum; x++) {
            result.push(nums1[i])
        }

        x = sum
    }

    return result

};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));