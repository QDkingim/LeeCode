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
var deleteDuplicates = function (head) {
  // 如果链表为空，直接返回
  if (!head) return head;

  // 初始化当前节点为头节点
  let cur = head;

  // 遍历链表，直到当前节点没有下一个节点
  while (cur.next) {
    // 如果当前节点值与下一个节点值相同
    if (cur.val === cur.next.val) {
      // 跳过下一个节点，直接连接下下个节点（删除重复节点）
      cur.next = cur.next.next;
    } else {
      // 值不同时，移动当前指针到下一个节点继续检查
      cur = cur.next;
    }
  }

  // 返回处理后的链表头节点
  return head;
};