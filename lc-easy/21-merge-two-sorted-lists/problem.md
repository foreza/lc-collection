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