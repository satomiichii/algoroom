// function nthFib(num) {
//   if (num === 1) {
//     return 0;
//   } else if (num === 2) {
//     return 1;
//   }
//   return nthFib(num - 1) + nthFib(num - 2);
// }

// function nthFib(num, memo = { 1: 0, 2: 1 }) {
//   if (memo[num] >= 0) {
//     return memo[num];
//   } else {
//     memo[num] = nthFib(num - 1, memo) + nthFib(num - 2, memo);
//     return memo[num];
//   }
// }

function nthFib(num) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (num >= counter) {
    const sum = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = sum;
    counter++;
  }
  return num > 1 ? lastTwo[1] : lastTwo[0];
}

console.log(nthFib(1));
