# Coin Change

## Prompt

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

## Example

coinChange([1, 2, 5], 11) > 3
coinChange([1, 2, 5], 18) > 5
coinChange([2], 3) > -1
coinChange([1], 0) > 0

## Approach

This is a problem that can be solved by using Dynamic Programming.
Dynamic Programming is the approach to solve complex problems by breaking them down into smaller problem and tackle the smaller problems first to finaly solve the bigger problem.

In this case, if you use Bottom up approach (iterative), figure out the minimum number of coins to make 1 cent first and store the result in an array and use it to solve next smallest value, which is 2 cent and keep incrementing the number untill the target number.

## Solution

Check the solution.js

## Credit

Leetcode medium:
https://leetcode.com/problems/coin-change/

Algo Expert medium:
https://www.algoexpert.io/questions/Min%20Number%20Of%20Coins%20For%20Change
