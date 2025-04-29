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
var reverseList = function (head) {
  // 基本情况：如果链表为空或只有一个节点，直接返回
  if (head === null || head.next === null) {
    return head;
  }

  // 递归反转剩余链表
  const newHead = reverseList(head.next);

  // 将当前节点的下一个节点的next指向当前节点
  head.next.next = head;
  // 将当前节点的next设为null
  head.next = null;

  // 返回新的头节点
  return newHead;
};

/**
 递归过程分步解析
示例链表：1 → 2 → 3 → 4 → null
目标结果：4 → 3 → 2 → 1 → null

步骤 1：递归到链表末尾
调用 reverseList(1)

条件不满足（head.next = 2），进入递归。

调用 reverseList(2)

条件不满足（head.next = 3），继续递归。

调用 reverseList(3)

条件不满足（head.next = 4），继续递归。

调用 reverseList(4)

满足基线条件（head.next = null），返回 head = 4。



步骤 2：回溯调整指针
回溯层级 1（reverseList(3) 的上下文）：

newHead = 4（来自 reverseList(4) 的结果）

当前 head = 3，head.next = 4

操作 1：head.next.next = head → 4.next = 3（链表变为 4 → 3）

操作 2：head.next = null → 3.next = null（断开原连接）

返回 newHead = 4，此时链表结构：
4 → 3 → null

回溯层级 2（reverseList(2) 的上下文）：

newHead = 4（来自上一步的结果）

当前 head = 2，head.next = 3

操作 1：head.next.next = head → 3.next = 2（链表变为 3 → 2）

操作 2：head.next = null → 2.next = null（断开原连接）

返回 newHead = 4，此时链表结构：
4 → 3 → 2 → null

回溯层级 3（reverseList(1) 的上下文）：

newHead = 4（来自上一步的结果）

当前 head = 1，head.next = 2

操作 1：head.next.next = head → 2.next = 1（链表变为 2 → 1）

操作 2：head.next = null → 1.next = null（断开原连接）

返回 newHead = 4，最终链表结构：
4 → 3 → 2 → 1 → null


 */
