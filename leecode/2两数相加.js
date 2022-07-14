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
var addTwoNumbers = function (l1, l2) {
    let add = 0
    let head = null,
        tail = null
    // 循环l1和l2链表
    while (l1 || l2) {
        let val1 = l1 != null ? l1.val : 0
        let val2 = l2 != null ? l2.val : 0
        let sum = val1 + val2 + add // 两链表的节点值相加再加进位
        if (!head) {
            head = tail = new ListNode(sum % 10) // 当头节点为null时创建新节点
        } else {
            tail.next = new ListNode(sum % 10) // 有节点的时候则加入tail节点的后面
            tail = tail.next // 指针后移
        }

        add = Math.floor(sum / 10) // 求进位

        // 如果l1或者l2没走到头,就后移指针
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }

    // 因为是逆序相加，如果到了最后一位还有进位的话，那必须要新创一个节点来保存进位
    if (add > 0) {
        tail.next = new ListNode(add)
    }

    return head // head和tail指向同一个链表，head始终指向头指针，tail一直在移动
};