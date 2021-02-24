function countUniqueValues(arr) {
  let counter = 0;
  while (arr.length) {
    const num = arr[0];
    counter++;
    arr = arr.slice(arr.lastIndexOf(num) + 1);
  }
  return counter;
}

function countUniqueValues(arr) {
  let counter = 0;
  let start = 0;
  let last = 1;

  while (start < arr.length) {
    if (arr[start] === arr[last]) {
      last++;
    } else {
      start = last;
      counter++;
    }
  }
  return counter;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
