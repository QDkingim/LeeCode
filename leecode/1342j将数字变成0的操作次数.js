/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let step = 0 // 步数
    while (num != 0) { // num等于0时，跳出循环
        if (num % 2 === 0) {
            // num是偶数，就除以2
            num /= 2
            step++
        } else {
            // num是奇数
            num--
            step++
        }
    }

    return step
};

// console.log(numberOfSteps(123));