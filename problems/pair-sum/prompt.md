## Pair Sum

# Prompt

Given an array arr consisting of N integers, sorted in ascending order (least to greatest), and a separate number (a sum), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

# Examples

pairSum([1, 1, 2, 3, 4, 5], 7) -> true (either 2+5 or 3+4)
pairSum([1, 2, 3, 4, 5], 10) -> false
pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
pairSum([1, 2, 3, 7, 8], 7) -> false
pairSum([-2, 0, 4, 6, 10], 8) -> true (-2 + 10)
pairSum([1, 2, 3, 4, 5], 2) -> false
Examples - Edge cases

pairSum([1], 2) -> false
pairSum([2], 2) -> false
pairSum([], 1) -> false

# Approarch

There are two approarch for this problem. The first one is using nested for loop to iterate through the array to examine every possible pair in the array. This approarch is 0(N^2) time complexity with O(1) space complexity.

The second approarch is using 2 pointers and sorted array. The left pointer starts off from the 0 index of the array which is the smallest number, and the right pointer is from the last index of the array which is the largest number. While the left pointer index is less than the right pointer, check if the sum of the 2 index aganst the target and if it's less than the target, increment the left pointer by 1. else if the sum is greater than the target, decrement the right pointer by 1. This approarch is O(N) time complexity with 0(1) space complexity.

# Solution

Check the solution.jp
