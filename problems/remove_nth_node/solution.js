function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Naive solution with two passes

const removeNthNaive = (head, n) => {
  let dummy = new ListNode(0, head);
  let lenOfList = 0;

  while (head !== null) {
    lenOfList++;
    head = head.next;
  }

  head = dummy;

  while (lenOfList - n > 0) {
    head = head.next;
    lenOfList--;
  }

  head.next = head.next.next;
  return dummy.next;
};

const removeNthOptimize = (head, n) => {
  const dummy = new ListNode(0, head);
  let first = dummy;
  let secont = dummy;

  while (n >= 0) {
    first = first.next;
    n--;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = secont.next.next;
  return dummy.next;
};
