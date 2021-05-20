const { performance } = require('perf_hooks');

const t1 = performance.now();

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentNum = arr[i];
    let currentIsMin = true;
    for (let j = i - 1; j >= 0; j--) {
      if (currentNum < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = currentNum;
        currentIsMin = false;
        break;
      }
      if (currentIsMin) arr[j] = currentNum;
    }
  }
  return arr;
}

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentNum = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentNum; j--) {
      arr[j + 1] = arr[j];
    }
    console.log(j);
    arr[j + 1] = currentNum;
  }
  return arr;
}

const testArr = [4, 5, 1, 3, 29, 11];
const testArr2 = [4, 5, 1, 3, 29, 11];
console.log(insertionSort(testArr));
console.log(insertionSort2(testArr2));
const t2 = performance.now();
console.log(`The function run time was ${t2 - t1} ms`);
