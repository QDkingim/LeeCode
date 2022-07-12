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
    let l1Arr, l2Arr = []
    let i, j = 0

    while (l1.next !== null) {
        l1 = l1.next
        let i = 0
        l1Arr[i] = l1.val
        i++
    }

    while (l2.next !== null) {
        l2 = l2.next
        l2Arr[j] = l2.val
        j++
    }
    console.log(l1Arr, l2Arr);

};