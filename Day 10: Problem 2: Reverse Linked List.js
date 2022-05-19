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
var reverseList = function (head, prev = null) {
  if (!head) return null;
  const item = { val: head.val, next: prev };
  return head.next ? reverseList(head.next, item) : item;
};
