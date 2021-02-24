## Sum Zero

# Prompt

Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

# Example

sumZero([-3, -2, 0 , 1, 3]) -> [-3, 3]
sumZero([1, 2, 3]) -> undefined
sumZero([-2, 0 , 1, 3]) -> undefined

# Approarch

The solution is utilizing two pointers. At the begining the first pointer is at the first index of the array, and the second pointer is at the end of the array.

While the left pointer is less than the right pointer, check the sum of the two integers at the pointed index, and if the sum is equal to zero, return the array with the two integers as the elements, if the sum is less than zero, increment left pointer by 1 to have larger number to add. If the sum is greater than zero, decrement right pointer by 1 to have smaller number to add.

The time complexity of this solution is O(N) and the space complexity is O(1)

# Solution

Check solution.js
