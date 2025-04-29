/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, carry = 0) {
  // 递归终止条件：两个链表都为空且没有进位
  if (!l1 && !l2 && carry === 0) {
    return null;
  }

  // 获取当前节点的值，如果节点为空则为0
  const val1 = l1 ? l1.val : 0;
  const val2 = l2 ? l2.val : 0;

  // 计算当前位的和（包括进位）
  const sum = val1 + val2 + carry;

  // 计算新的进位
  const newCarry = Math.floor(sum / 10);

  // 创建新节点，存储当前位的值（取个位数）
  const node = new ListNode(sum % 10);

  // 递归处理下一个节点
  // 如果链表还有下一个节点，则继续递归；否则传入null
  const next1 = l1 ? l1.next : null;
  const next2 = l2 ? l2.next : null;

  // 将新节点的next指向递归结果
  node.next = addTwoNumbers(next1, next2, newCarry);

  return node;
};
