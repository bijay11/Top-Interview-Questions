class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @returns {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  const head = new ListNode();
  console.log("test head", head);
  let node = head;
  while (list1 && list2) {
    console.log("test list1.val", list1.val);
    if (list1.val > list2.val) {
      node.next = list2;
      list2 = list2.next;
    } else {
      node.next = list1;
      list1 = list1.next;
    }
    node = node.next;
  }
  node.next = list1 || list2;
  return head.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
