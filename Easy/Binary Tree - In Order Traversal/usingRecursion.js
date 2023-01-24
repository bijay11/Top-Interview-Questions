const inOrderTraversalFn = (node, result) => {
  if (!node) return;
  inOrderTraversalFn(node.left, result);
  result.push(node.val);
  inOrderTraversalFn(node.right, result);
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  inOrderTraversalFn(root, result);
  return result;
};

const newNode = {
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

console.log("newNode inorderTraversal", inorderTraversal(newNode));
