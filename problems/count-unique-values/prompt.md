## Count Unique Values

# Prompt

Imprement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negarive numbers in the array, but it will always be sorted.

# Example

countUniqueValues([1,1,1,1,1,2]) -> 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) -> 7
countUniqueValues([]) -> 0
countUniqueValues([-2,-1,-1,0,1]) -> 4

# Approarch

The naive solution is using built-in array method, which is slice and lastIndexOf. While the array's length is not 0, check the last index of the number at the zero index. and remove all the duplicated value by using slice and increment the counter by 1. By doing this, you can count only unique values inside of the array. The time complexity is O(N^2) because using slice and lastindexof inside of the while loop. Space complexity is O(1)

The optimized solution uses two pointers. The first pointer starts at the zero index of the array and the second pointer starts at the one index of the array. Compare the two values and if they are same value, increment the second pointer by 1. If the values are different, that means the second pointer found unique value, so the first pointer moves to the second pointer and increment counter by 1. The loop ends when the the first pointer reachs the last index of the array. Time complexitiy O(N) with space complexity O(1)

# Solution

Check solution.js

# Credit

This prompt is from Colt Steele's Algorithms and Data Structure course on Udemy.
