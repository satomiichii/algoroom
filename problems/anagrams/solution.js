function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCounter = {};
  for (let char of str1) {
    charCounter[char] = ++charCounter[char] || 1;
  }

  for (let char of str2) {
    if (!charCounter[char]) {
      return false;
    } else {
      charCounter[char] = --charCounter[char];
    }
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
