// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。
// 如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。


// 贪心算法的典例

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort(function (a, b) {
        return a - b;
    });

    s.sort(function (a, b) {
        return a - b;
    });

    let index = s.length - 1
    let result = 0

    for (let i = g.length - 1; i >= 0; i--) {
        if (index >= 0 && s[index] >= g[i]) {
            index--
            result++
        }
    }

    return result

};