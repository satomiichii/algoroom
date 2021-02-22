function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const counter = {};
  for (let elm of arr1) {
    counter[elm * elm] = ++counter[elm * elm] || 1;
  }
  for (let elm of arr2) {
    if (!counter[elm]) {
      return false;
    } else {
      counter[elm] = --counter[elm];
    }
  }
  return true;
}

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, , 1], [4, 4, 1]));
