function rotatedArraySearch(arr, target) {
  let left = 0;
  let right = arr.length;

  // Find the index that the array was shifted at.
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let start = left;
  left = 0;
  right = arr.length - 1;

  // Now both sides of the shifted index are sorted, so determine which range the target value is in.
  if (target >= arr[start] && target <= arr[right]) {
    left = start;
  } else {
    right = start;
  }

  //Then you can simply excute binary search with the side of the array.
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
