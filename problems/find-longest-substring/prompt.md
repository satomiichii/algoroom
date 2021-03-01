# Find Longest Substrong

## Prompt

Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

## Example

findLongestSubstring('') -> 0
findLongestSubstring('thisisawesome') -> 6
findLongestSubstring('rithmschool') -> 7
findLongestSubstring('thecatinthehat') -> 7
findLongestSubstring('bbbbbbb') -> 1
findLongestSubstring('longestsubstring') -> 8
findLongestSubstring('thisishowwedoit') -> 6

## Approarch

The solution uses a sliding window approach. create an object called seen to keep track of the character in the string and the index of the next character. Loop through the character in the string and each time check if the char is already seen, then if so move the start pointer to the value of the char in the seen object to start over the substring from the index. also, each time of the loop, check the current longest substring by comparing the current longest to the length between the current char and the start point.

## Solution

Check solution.js

## Credit

This prompt is from Colt Steele's Algorithms and Data Structure course on Udemy.
