/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 回溯
var combinationSum = function(candidates, target) {
    // 存储所有符合条件的组合
    const result = [];
    // 存储当前正在构建的组合
    const path = [];
    
    // 对数组进行排序，方便后续处理
    candidates.sort((a, b) => a - b);
    
    /**
     * 回溯函数
     * @param {number} start - 当前开始选择的索引
     * @param {number} sum - 当前组合的和
     */
    const backtrack = (start, sum) => {
        // 如果当前和等于目标值，将当前组合加入结果集
        if (sum === target) {
            result.push([...path]);
            return;
        }
        
        // 如果当前和大于目标值，直接返回
        if (sum > target) {
            return;
        }
        
        // 从start开始遍历数组
        for (let i = start; i < candidates.length; i++) {
            // 选择当前数字
            path.push(candidates[i]);
            // 继续选择当前数字（因为可以重复使用）
            backtrack(i, sum + candidates[i]);
            // 回溯，移除当前数字
            path.pop();
        }
    };
    
    // 从索引0开始回溯
    backtrack(0, 0);
    
    return result;
};

console.log(combinationSum([2,3,5], 8)); // 输出: [[2,2,2,2],[2,3,3],[3,5]]