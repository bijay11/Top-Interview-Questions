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
 * @return {boolean}
 */

// create a helper function that takes two nodes
// it takes node1 and node2
const helper = (node1, node2) => {
  // if node1 and node2 is null, return true
  if (node1 === null && node2 === null) return true;

  // if node1 or node2 is null, return false
  if (node1 === null || node2 === null) return false;

  // if node1 val !== node2 val, return false
  if (node1.val !== node2.val) return false;

  // call helper function with node1 left and node2 right
  // && node1 right and node2 left,
  return helper(node1.left, node2.right) && helper(node1.right, node2.left);
};

var isSymmetric = function (root) {
  //if root is emtpy, retun true
  if (!root) return true;

  return helper(root.left, root.right);
};

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};

console.log(isSymmetric(tree));
