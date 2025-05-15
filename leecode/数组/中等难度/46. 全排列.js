/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 存储所有排列的结果
    const result = [];
    // 存储当前正在构建的排列
    const current = [];
    // 记录数字是否被使用过
    const used = new Array(nums.length).fill(false);
    
    // 定义回溯函数
    const backtrack = () => {
        // 如果当前排列的长度等于原数组长度，说明找到了一个完整的排列
        if (current.length === nums.length) {
            // 将当前排列的副本添加到结果中
            result.push([...current]);
            return;
        }
        
        // 遍历所有数字
        for (let i = 0; i < nums.length; i++) {
            // 如果当前数字未被使用
            if (!used[i]) {
                // 标记当前数字为已使用
                used[i] = true;
                // 将当前数字添加到当前排列中
                current.push(nums[i]);
                // 继续递归构建排列
                backtrack();
                // 回溯：将当前数字从当前排列中移除
                current.pop();
                // 回溯：将当前数字标记为未使用
                used[i] = false;
            }
        }
    };
    
    // 开始回溯
    backtrack();
    return result;
};