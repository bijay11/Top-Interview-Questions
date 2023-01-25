var maxDepth = function (root) {
  // if root is null return 0
  // create a depth variable 0
  if (!root) return 0;
  let maxDepthNum = 1;

  const traverseDepth = (root, nodeDepth) => {
    if (!root) return;
    maxDepthNum = Math.max(maxDepthNum, nodeDepth);
    traverseDepth(root.left, nodeDepth + 1);
    traverseDepth(root.right, nodeDepth + 1);
  };
  traverseDepth(root, maxDepthNum);
  return maxDepthNum;
};

const tree = {
  val: 3,
  left: {
    val: 9,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 20,
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

console.log("test", maxDepth(tree));
