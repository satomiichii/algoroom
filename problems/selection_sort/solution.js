const { performance } = require('perf_hooks');

const t1 = performance.now();

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minNum = Infinity;
    let minIndex;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < minNum) {
        minNum = arr[j];
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

const testArr = [4, 5, 1, 3, 29, 11];
console.log(selectionSort(testArr));
const t2 = performance.now();
console.log(`The function run time was ${t2 - t1} ms`);
