# Merge Two Linked List

## Prompt

Write a function that takes in the heads of two singly linked lists that are in sorted order, respectively. The function should merge the lists in place (shouldn't create new list) and return the head of the merged list, which is also sorted order.

Definition for singly-linked list.
function ListNode(val, next) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
}

## Example

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: l1 = [], l2 = []
Output: []

Input: l1 = [], l2 = [0]
Output: [0]

## Approach

The solution uses 3 pointers to keep track of current nodes for both linked list and previous node. The pointers for current nodes are to compare values between each node. The pointer for previous node is to mutate the connection between 2 linked list based on the value.

Iterative solution uses while loop.
it loop through those 2 linked list as long as both nodes that two pointers are pointing at are not null. At each loop, compare the values on the pointed nodes and set the next property of previous to the node that has smaller value.

## Solution

Check the solutiion.js

## Credit

https://www.algoexpert.io/questions/Merge%20Linked%20Lists

https://leetcode.com/problems/merge-two-sorted-lists/
