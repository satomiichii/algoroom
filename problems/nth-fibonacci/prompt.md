# Nth Fibonacci

## Prompt

The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n-1)th and (n-2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.

## Example

nthFib(6) //5 ->(0,1,1,2,3,5)
nthFib(3) //1 ->(0,1,1)
nthFib(8) //13 ->(0,1,1,2,3,5,8,13)
nthFib(1) //0 ->(0)

## Approach

This problem can be solved with recursion. The base case is when the input is equal to 1 or 2. In that case the function returns 0 and 1. Otherwise the function will hit recursive case, which returns the sum of two recursive calls with the input n-1 and n-2.
Time: O(2^n) Space: (n)

To optimize the recursive solution, we can use memoization to store the result of nth fib while calling the function recursively and use the data in memo to culculate the result for later call stack.
Time: O(n) Space: O(n)

The most optimal solution is keepng track of the previous two result of nth fib in an array. The array can be initialized as [0, 1] for 1st and 2nd fib. until the counter gets to the input number, the elm of the array will be replaced with the next nth fib.
Time: O(n) Space: O(1)

## Solution

Check the solution.js

## Credit

This is Algo Expart Easy problem and also introduced in the Jackies Reacto session in Fullstack Academy.
