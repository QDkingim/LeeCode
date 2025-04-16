/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 创建一个虚拟头节点，方便处理删除头节点的情况
  const dummy = new ListNode(0, head);
  let first = head;
  let second = dummy;

  // 让第一个指针先走n步
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  // 同时移动两个指针，直到第一个指针到达链表末尾
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // 删除倒数第n个节点
  second.next = second.next.next;

  // 返回虚拟头节点的下一个节点
  return dummy.next;
};
