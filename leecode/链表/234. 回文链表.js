/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 如果链表为空或只有一个节点，直接返回true
  if (head === null || head.next === null) {
    return true;
  }

  // 找到链表的中间节点
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //   反转后半部分链表
  let prev = null;
  let current = slow;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // 比较前半部分和后半部分
  let left = head;
  let right = prev;
  while (right !== null) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  // 返回结果
  return true;
};
