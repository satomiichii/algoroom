function sameFrequency(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);
  if (num1.length !== num2.length) {
    return false;
  }

  const counter = {};

  for (let digit of num1) {
    counter[digit] = ++counter[digit] || 1;
  }

  for (let digit of num2) {
    if (!counter[digit]) {
      return false;
    } else {
      counter[digit] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
