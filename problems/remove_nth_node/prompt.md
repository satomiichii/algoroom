# Remove Nth node from the end of the linked list

## Prompt

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

## Example

Example 1:
![](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

Example 2:

```
Input: head = [1], n = 1
Output: []
```

Example 3:

```
Input: head = [1,2], n = 1
Output: [1]
```

## Approach

The naive solution can take two pass, which means iterate the list twice.
First iteration for finding the length of the list, and the second iration for modify the connection of the list to skip the nth node from the end of the list.

Time: O(n) Space: O(1)

The optimize solution can only take one pass. Instead of using 1 pointer, use 2 pointers to keep track of the length of the list and the node right before the nth node so that you can skip nth node by connecting the node to the next of the nth node.

Time: O(n) Space: O(1)

## Solution

Check out the solution.js

## Credit

Leatcode: Medium
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
