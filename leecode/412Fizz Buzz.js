/**
 * @param {number} n
 * @return {string[]}
 * 
 * 思路：先将Fizz,Buzz,FizzBuzz这三个字符串存入str中待用，判断如果是3的倍数后，再判断，如果是5的倍数，该返回数组的索引值就为FuzzBuzz，否则为Fuzz
 */
var fizzBuzz = function (n) {
    str1 = "Fizz"
    str2 = "Buzz"
    str3 = "FizzBuzz"
    let answer = []

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            answer[i - 1] = str1
        } else if (i % 5 === 0) {
            answer[i - 1] = str2
        } else {
            answer[i - 1] = i.toString()
        }
        if (i % 3 === 0 && i % 5 === 0) {
            answer[i - 1] = str3
        }
    }

    return answer
};

console.log(fizzBuzz(15));