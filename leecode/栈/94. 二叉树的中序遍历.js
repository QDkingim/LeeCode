/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // 存储遍历结果的数组
    const result = [];
    // 用于存储节点的栈
    const stack = [];
    // 当前节点指针
    let current = root;

    // 当栈不为空或当前节点不为空时继续遍历
    while (current !== null || stack.length > 0) {
        // 将当前节点的所有左子节点入栈
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // 弹出栈顶节点（最左的节点）
        current = stack.pop();
        // 将节点值加入结果数组
        result.push(current.val);
        // 移动到右子节点
        current = current.right;
    }

    return result;
};