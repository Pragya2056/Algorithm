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
var removeNthFromEnd = function(head, n) {
let curr = head;
    
    while (curr.next) {
        let next = curr.next;
        if (getIndexToEnd(next, n)) {
            curr.next = curr.next.next;
            return head;
        }
        curr = curr.next;
    }
    
    return head.next;
};

const getIndexToEnd = (node, n) => {
    while (node) {
        node = node.next;
        --n;
    }
    
    return n === 0;
}
