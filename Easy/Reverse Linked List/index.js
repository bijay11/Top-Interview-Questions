const node = (val) => {
  return {
    val,
    next: null,
  };
};
const createLinkedList = (head) => {
  let list = node(head[0]);
  let selectedNode = list;
  if (head.length === 1) return list;
  for (let i = 1; i < head.length; i++) {
    selectedNode.next = node(head[i]);
    selectedNode = selectedNode.next;
  }
  return list;
};

var reverseList = function (head) {
  // if head is empty, return null
  // create a temp variable
  // traverse through head
  // set temp as head.next
  // set head as tail
  // set head.next = null
  // set temp as null

  if (!head) return null;

  let temp;
  let tail;
  let previous = null;

  while (head) {
    // store head next reference
    temp = head.next;

    //make the last element as tail
    tail = head;

    // set tail next to previous
    tail.next = previous;

    // make previous as tail
    previous = tail;

    // set head as temp which is head.next
    head = temp;
  }

  return previous;
};

console.log(reverseList(createLinkedList([1, 2, 3, 4, 5])));
