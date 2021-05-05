# Container With Most Water

## Prompt

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

## Example

Example 1:

![exampleImage](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

Example 2:

```
Input: height = [1,1]
Output: 1
```

Example 3:

```
Input: height = [4,3,2,1,4]
Output: 16
```

Example 4:

```
Input: height = [1,2,1]
Output: 2
```

## Approach

This problem can be solved by using 2 pointers.
Between 2 pilers, water can be contained the height of the lower side of the pilers. left pointer starts at index 0, and the right pointer starts at the last index of the height array and loop through until two pointers meet at the middle point.

For each iteration, check the height of both element that two pointers are located at and pick smaller height. Then caluculate current water area between 2 pilers. If the current water area is greater than current max area, replace the current max area with the burrent water area.

At the end of the iteration, smaller side of the pointer should move towards the other pointer.

## Solution

Check out solution.js

## Credit

LeetCode: Medium
https://leetcode.com/problems/container-with-most-water/

different Type Example:

AlgoExpert: Hard
https://www.algoexpert.io/questions/Water%20Area
