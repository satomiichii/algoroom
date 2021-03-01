function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }

  return longest;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));
