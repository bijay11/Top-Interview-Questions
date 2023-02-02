const node = (val) => {
  return {
    val,
    next: null,
  };
};
const convertArrObj = (arr) => {
  if (!arr.length) return null;

  const root = node(arr[0]);

  let currentNode = root;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = node(arr[i]);
    currentNode = currentNode.next;
  }

  return root;
};

var addTwoNumbers = function (l1, l2) {
  const arr1 = [];
  const arr2 = [];

  // make two empty strings
  let str1 = "";
  let str2 = "";

  while (l1 || l2) {
    if (l1) {
      arr1.push(l1.val);
      l1 = l1.next;
    }
    if (l2) {
      arr2.push(l2.val);
      l2 = l2.next;
    }
  }

  for (let i = arr1.length - 1; i >= 0; i--) {
    str1 += arr1[i];
  }
  for (let i = arr2.length - 1; i >= 0; i--) {
    str2 += arr2[i];
  }

  const newNum = "" + (+str1 + +str2);
  const newArr = newNum
    .split("")
    .reverse()
    .map((el) => +el);

  return convertArrObj(newArr);
};

console.log(
  "test addTwoNumbers",
  addTwoNumbers(convertArrObj([2, 4, 3]), convertArrObj([5, 6, 4]))
);

// LC SOLUTION
//  const head = new ListNode();
//  let cursor = head;
//  let carry = 0;
//  while (l1 || l2 || carry) {
//    cursor.next = new ListNode();
//    cursor = cursor.next;
//    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
//    carry = val >= 10 ? 1 : 0;
//    cursor.val = val % 10;
//    l1 = l1 ? l1.next : null;
//    l2 = l2 ? l2.next : null;
//  }
//  return head.next;
