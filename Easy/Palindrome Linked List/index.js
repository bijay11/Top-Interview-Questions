const node = (val) => {
  return {
    val,
    next: null,
  };
};
const arrayToLinkedList = (arr) => {
  if (!arr) return null;

  let root = node(arr[0]);
  let nextNode = root;

  for (let i = 1; i < arr.length; i++) {
    // store reference to the last next
    nextNode.next = node(arr[i]);
    nextNode = nextNode.next;
  }
  return root;
};

var isPalindrome = function (head) {
  if (!head) return null;
  // if head is empty return null

  // Follow up: Could you do it in O(n) time and O(1) space?

  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  if (arr.length === 1) return true;

  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer1 <= pointer2) {
    if (arr[pointer1] !== arr[pointer2]) return false;
    pointer1++;
    pointer2--;
  }
  return true;
};

console.log(isPalindrome(arrayToLinkedList([1, 2])));
