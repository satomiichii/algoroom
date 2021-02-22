## Anagrams

# Prompt

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word. phrase or name formed by rearrenging the letters of another, such as cinema formed from iceman.

# Example

validAnagram('', '') -> true
validAnagram('aaz', 'zza') -> false
validAnagram('anagram', 'nagaram') -> true
validAnagram('rat', ''car') -> false
validAnagram('awesome', 'awesom') -> false
validAnagram('qwerty', 'qeywrt') -> true

# Aproarch

The optimized solution is using a frequency counter.
To cover a simple false case, if the length of the two strings is different, immediately return false.

otherwise, create an object for counting each character and the frequency of the first string. Then loop through the second string character by character and if the character doesn't exist in the counter object or running out of the count, return false. otherwise, decrement the count of the key's frequency by 1.

Time: O(n)
Space: O(1)

# Solution

check the solution.js

# Credit

This prompt is from Colt Steele's Algorithms and Data Structure course on Udemy.
