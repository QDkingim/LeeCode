/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 
 * 1.如果magazine字符串长度小于ransomNote字符串的长度，则返回false
 * 2.如果magazine字符串长度大于等于ransomNote字符串的长度，直接遍历ransom字符串，每一个字符都去magazine中找，如果找到则将magazine中的这个字符
 *   替换成1，表示下次循环不再找这个字符（因为每个字符只能用一次），如果没有找到则直接返回false
 * 
 */
var canConstruct = function (ransomNote, magazine) {
    let flag = false // 判断在magazine中有没有找到这个字符，找到true，否则false
    let flagArr = [false] //记录magazine中的某个字符有没有被查找过
    if (magazine.length < ransomNote.length) {
        return false
    } else {
        for (let i = 0; i < ransomNote.length; i++) {
            for (let j = 0; j < magazine.length; j++) {
                if (ransomNote[i] === magazine[j]) {
                    if (!flagArr[j]) {
                        flagArr[j] = true
                        flag = true
                        j++
                        break
                    } else {
                        continue
                    }

                }
            }
            if (!flag) {
                return false
            }
            flag = false
        }
        return true
    }
};