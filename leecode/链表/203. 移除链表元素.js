/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 创建一个虚拟头节点，方便处理删除头节点的情况
  const dummy = new ListNode(0, head);
  let current = dummy;

  // 遍历链表，删除所有值为val的节点
  while (current !== null && current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  // 返回虚拟头节点的下一个节点
  return dummy.next;
};
