# Max Subarray Sum

## Prompt

Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

# Example

maxSubarraySum([1,2,5,2,8,1,5], 2) -> 10
maxSubarraySum([1,2,5,2,8,1,5], 4) -> 17
maxSubarraySum([4,2,1,6,], 1) -> 6
maxSubarraySum([4,2,1,6,2], 4) -> 13
maxSubarraySum([], 4) -> null

# Approarch

The naive solution uses nested loop. The outer loop keeps track of the starting number for the addition and the second loop will adds up n consective numbers starting from the outer index. Then compare the temporary sum to the currentMax sum and if the temp sum is greater than currentMax, replace it with temp sum.
Time: O(N^2), Space: O(1)

The optimized solution is utilizing the sliding window approarch.
At the beggining create valuables to store currentMax and tempSum. Initialy those valuables store the sum of n consective numbers starting from the zero index. Then loop through the array.
Each time, reculculate the tempSum by subtracting the first number and adding the next number. Compare the tempSum to the currentMax and take the greater value as the currentMax.
Time: O(N) Space: O(1)

# Solution

Check solution.js

# Credit

This prompt is from Colt Steele's Algorithms and Data Structure course on Udemy.
