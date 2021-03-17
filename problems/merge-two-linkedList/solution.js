// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  // Write your code here.
  let p1 = headOne;
  let p2 = headTwo;
  let prev = null;

  while (p1 && p2) {
    if (p1.value < p2.value) {
      prev = p1;
      p1 = p1.next;
    } else {
      if (prev !== null) {
        prev.next = p2;
      }
      prev = p2;
      p2 = p2.next;
      prev.next = p1;
    }
  }
  if (p1 === null) {
    prev.next = p2;
  }
  return headOne.value < headTwo.value ? headOne : headTwo;
}
