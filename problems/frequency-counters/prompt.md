## Frequency Counters

# Prompt

Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

# Example

same([1, 2, 3], [4, 1, 9]) -> true
same([1, 2, 3], [1, 9]) -> false
same([1, 2, ,1], [4, 4, 1]) -> false

# Approarch

There are two ways to solve this problem. If the length of the two arrays are different, immedietry return false in both approarch.

The naive approarch is using nested loop. loop through the each loop and check if there is a squared value within array2. If so, remove the element from the array2 and continue. If not, return false.

The optimized approarch is utilizing a frequency counter such as an object. Store all the squared keys of arr1 with the frequency as the value. Then loop through the array2 and check if there is a corresponding key, if so decrement the number of the value by 1. if not, return false.

# Solution

Check the solution.js

# Credit

This prompt is from Colt Steele's Algorithms and Data Structure course on Udemy.
