# Search in Rotated Sorted Array

## Prompt

You got an integer array nums that is sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

- The solution's time complexity should be O(log n)

## Example

rotateArraySearch([4,5,6,7,0,1,2], 0) >> 4
rotateArraySearch([4,5,6,7,0,1,2], 3) >> -1
rotateArraySearch([1], 0) >> -1

## Approach

To solve this problem with O(log n) time complexity, we should use banary search. But since the array is rotated at k index, first we have to find the k. To find K, we can use regular binary search through the array. Use three pointers (left, mid, right) and chedk if value at mid is less than the value at rigtht while left is less than right. If not, that means k is within the range between mid and right, so your can move left pointer to mid + 1. Else, k is withing the other half so move the right pointer to mid. At the end of the while loop, left pointer is pointing at k, so store the index in new variable called start.

Once we fond the index of k, divide the array into k to right and the other half and check which range the target value can be in. then, excute regular binary search with the range.

Time: O(log n) Space: O(1)

## Solution

Check the solutiion.js

## Credit

Leetcode medium:
https://leetcode.com/problems/search-in-rotated-sorted-array/

Algo expert hard:
https://www.algoexpert.io/questions/Shifted%20Binary%20Search

Solution Video;
https://www.youtube.com/watch?v=QdVrY3stDD4&ab_channel=NickWhite
