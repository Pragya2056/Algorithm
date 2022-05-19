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
var middleNode = function(head) {
    let a = head, b = head
    while (b != null && b.next != null) {
        b = b.next
        if (b == null) break;
        else b = b.next;
        a = a.next
    }
    return a;
};
