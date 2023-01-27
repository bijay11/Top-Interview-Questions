class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const sortedArrayToBST = (nums) => {
  if (!nums.length) return null;

  const helper = (left, right) => {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = helper(left, mid - 1);
    node.right = helper(mid + 1, right);

    return node;
  };

  return helper(0, nums.length - 1);
};

console.log("test sortedArrayToBST", sortedArrayToBST([-10, -3, 0, 5, 9]));
