function pairSum(arr, target) {
  arr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return true;
    } else if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    }
  }

  return false;
}

function pairSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(pairSum([1, 1, 2, 3, 4, 5], 7));
console.log(pairSum([1, 2, 3, 4, 5], 10));
console.log(pairSum([0, 2, 3, 6, 9, 10], 10));
console.log(pairSum([1, 2, 3, 7, 8], 7));
console.log(pairSum([-2, 0, 4, 6, 10], 8));
console.log(pairSum([1, 2, 3, 4, 5], 2));
