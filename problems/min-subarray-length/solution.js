function minSubArrayLen(arr, int) {
  let total = 0;
  let start = 0;
  let end = 0;
  let length = Infinity;

  while (start < arr.length) {
    if (total < int && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= int) {
      length = Math.min(length, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return length === Infinity ? 0 : length;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
