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
 * 
 * 思路1(单指针法)：循环遍历一下链表，设置一个记录链表长度的值len，知道链表多长以后，用链表长度除以二得到中间结点
 *      因为如果有2个中间结点的话，取得是第二个中间结点，所以除以2后向上取整
 */
var middleNode = function (head) {
    let len = 0
    let cur = head
    while (cur != null) {
        ++len
        cur = cur.next
    }
    cur = head
    let k = 0
    while (k < Math.trunc(len / 2)) {
        ++k
        cur = cur.next
    }
    return cur
}