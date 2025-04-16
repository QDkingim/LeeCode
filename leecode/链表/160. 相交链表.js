/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 特殊情况处理：如果有一个链表为空，则不可能相交
  if (!headA || !headB) return null;

  // 定义两个指针分别指向两个链表的头节点
  let p1 = headA;
  let p2 = headB;

  // 当两个指针不相等时继续循环
  while (p1 !== p2) {
    // 如果p1到达链表A的末尾，则将其重定向到链表B的头部
    // 否则p1继续在链表A中移动
    p1 = p1 === null ? headB : p1.next;

    // 如果p2到达链表B的末尾，则将其重定向到链表A的头部
    // 否则p2继续在链表B中移动
    p2 = p2 === null ? headA : p2.next;
  }

  // 返回相交节点（如果没有相交，p1和p2最终都为null，也返回null）
  return p1;
};

/**
 * 解题思路：
 * 1. 使用双指针法，创建两个指针p1和p2分别指向两个链表的头节点
 * 2. 同时遍历两个链表，当一个指针到达链表末尾时，将其指向另一个链表的头部继续遍历
 * 3. 如果两个链表相交，指针p1和p2最终会在相交点相遇
 * 4. 如果两个链表不相交，则p1和p2最终都会指向null并退出循环
 *
 * 时间复杂度：O(m+n)，其中m和n分别是两个链表的长度
 * 空间复杂度：O(1)，只使用了常数级别的额外空间
 */

// 方法二：哈希表
var getIntersectionNode = function (headA, headB) {
  // 创建一个哈希表来存储链表A中的节点
  const visited = new Set();

  let temp = headA;
  // 遍历链表A，将所有节点添加到哈希表中
  while (temp !== null) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  // 遍历链表B，检查每个节点是否在哈希表中
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }

  // 如果链表B中没有找到相交节点，则返回null
  return null;
};
