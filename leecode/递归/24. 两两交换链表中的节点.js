/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 如果链表为空或只有一个节点，直接返回
  if (head === null || head.next === null) {
    return head;
  }

  // 保存第二个节点
  const newHead = head.next;
  // 递归处理剩余的节点
  head.next = swapPairs(newHead.next);
  // 将第二个节点指向第一个节点
  newHead.next = head;

  return newHead;
};

/*

边界条件处理：
如果链表为空（head === null）或只有一个节点（head.next === null），直接返回当前节点，因为不需要交换。
递归过程：
我们保存第二个节点作为新的头节点（newHead）
递归处理剩余的链表（从第三个节点开始）
将第一个节点的 next 指向递归处理后的结果
将第二个节点的 next 指向第一个节点


*/
