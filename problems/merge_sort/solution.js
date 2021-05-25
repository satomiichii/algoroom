// STEP1 : Implement the algolithm to merge 2 sorted array

function merge(arr1, arr2) {
  let resultArr = [];
  let left = 0;
  let right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      resultArr.push(arr1[left]);
      left++;
    } else {
      resultArr.push(arr2[right]);
      right++;
    }
  }
  while (left < arr1.length) {
    resultArr.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    resultArr.push(arr2[right]);
    right++;
  }

  return resultArr;
}

// STEP2 : Break down the original array and merge them back together recursively, using merge algolithm

function mergeSort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}

const testArry = [4, 29, 40, 1, 2, 0, 93];
console.log(mergeSort(testArry));
