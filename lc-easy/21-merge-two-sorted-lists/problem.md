# 21. Merge Two Sorted Lists

https://leetcode.com/problems/merge-two-sorted-lists/

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

## My assumptions
- Lists would be the same length (if not, we'll just have to append elements from the longer list to the final list)
- Lists might be 0 length (in that case, return empty)
- List content is guranteed to be integers
- I was wrong! Need to work with the actual 'node' data structure, can't use an array like I was thinking.
- We'll assume based off of this problem that they are testing for understanding of a linked list traversal


ListNode {
  val: 1,
  next: ListNode { val: 2, next: ListNode { val: 4, next: null } } }
ListNode {
  val: 1,
  next: ListNode { val: 3, next: ListNode { val: 4, next: null } } }


This linked list problem is really choking me.
I struggled and made bad assumptions.
