# Same Frequency

## Prompt

Write a function called sameFrequency, which accepts two positive integers and find out if the two numbers have the same frequency of digits.

## Example

sameFrequency(182, 281) -> true
sameFrequency(34, 14) -> false
sameFrequency(3589578, 5879385) -> true
sameFrequency(22, 222) -> false

## Approarch

This problem can be solved by using frequency counter, which is an object that stores each digit of the first number and count the frecuency of the number. Then You can loop through the each digit of the second number and if the number exists in the counter object, devrement the value by 1. If the number doesn't exist of the value is 0, return false.

## Solution

Check solution.js

## Credit

This prompt is from Colt Steele's Algorithms and Data Structure course on Udemy.
