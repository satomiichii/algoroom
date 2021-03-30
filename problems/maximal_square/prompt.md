# Maximal Square

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

## Example

const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
maximalSquare(matrix) >> 4

const matrix = [["0","1"],["1","0"]]
maximalSquare(matrix) >> 1

## Approach

This problem can be solved with dynamic programming. Create a new matrix with size m+1 x n+1 to store result of the max possible square for each position in original matrix. The max possible sqare for specific position can be computed by comparing the value of left, up, and upper left to the position and it will be the minimum value of those 3 + 1. To loop through the original matrix and the new matrix together, it takes nested loop for row and column.

Time: O(n _ m) Spase: O(n _ n)

## Solution

Check the solution.js

## Credit

LeetCode medium:
https://leetcode.com/problems/maximal-square/
