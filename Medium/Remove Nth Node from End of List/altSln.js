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
  let dummyHead = node(-Infinity);
  dummyHead.next = head;
  let resultHead = dummyHead;
  let count = 0;
  let tail = head;

  while (count < n) {
    tail = tail.next;
    count++;
  }

  let removeNode = head;
  let prev = dummyHead;

  while (tail) {
    tail = tail.next;
    removeNode = removeNode.next;
    prev = prev.next;
  }
  prev.next = removeNode.next;
  return resultHead.next;
};

console.log(removeNthFromEnd(linkedList([1, 2, 3, 4, 5]), 2));
