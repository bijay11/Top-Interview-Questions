const node = (val) => ({ val, next: null });

const linkedList = (arr) => {
  if (!arr.length) return null;

  let head = null;
  let current;
  let currentNode;

  for (let el of arr) {
    currentNode = node(el);
    if (!current) {
      current = currentNode;
      head = current;
    } else {
      current.next = currentNode;
      current = current.next;
    }
  }
  return head;
};

// console.log("test linkedList", linkedList([1, 2, 3, 4, 5]));

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;

  if (!fast) return head.next;

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return head;
};

console.log(removeNthFromEnd(linkedList([1, 2, 3, 4, 5]), 2));
