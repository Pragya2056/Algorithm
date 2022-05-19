/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;
    
    const queue = [root];
    
    while (queue.length) {
        const len = queue.length;
        
		// build up a level
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        // One level at a time
        queue.forEach((node, index) => {
            node.next = queue[index+1] !== undefined ? queue[index+1] : null
        })
    }
    return root
};
