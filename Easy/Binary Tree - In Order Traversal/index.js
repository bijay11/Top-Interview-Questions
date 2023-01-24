/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inOrderTraversal = (root) => {
  if (!root) return [];
  const leftValues = inOrderTraversal(root.left);
  const rightValues = inOrderTraversal(root.right);
  return [...leftValues, root.val, ...rightValues];
};

const node = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};

inOrderTraversal(node);
