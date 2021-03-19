# Min Subarray Length

## Prompt

Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

## Example

minSubArrayLen ([2,3,1,2,4,3], 7) -> 2
minSubArrayLen ([2,1,6,5,4], 9) -> 2
minSubArrayLen ([3,1,7,11,2,9,8,21,62,33,19], 52) ->1
minSubArrayLen ([1,4,16,22,5,7,8,9,10], 39) -> 3
minSubArrayLen ([1,4,16,22,5,7,8,9,10], 55) -> 5
minSubArrayLen ([4,3,3,8,1,2,3], 11) -> 2
minSubArrayLen ([1,4,16,22,5,7,8,9,10], 95) -> 0

## Approach

The solution uses sliding window approarch that two pointers keep track of the size of the subarray and check if the sum of the subarray is grater or equal to the target integer. The two pointers start at the 0 index of the array. check if the current total is greater or equal to the target and if not, increment end oiinter by 1 to add next number to the subarra. if the sum matches the target array, increment the start pointer to remove the first element of the subarray and update the min length of the subarray.

## Solution

Check the solutiion.js

## Credit

This prompt is from Colt Steele's Algorithms and Data Structure course on Udemy.
