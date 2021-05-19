const { performance } = require('perf_hooks');

const t1 = performance.now();

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSorted = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = false;
      }
    }
    if (isSorted) break;
  }
  return arr;
}

const testArr = [4, 5, 1, 3, 29, 11];
console.log(bubbleSort(testArr));
const t2 = performance.now();
console.log(`The function run time was ${t2 - t1} ms`);
