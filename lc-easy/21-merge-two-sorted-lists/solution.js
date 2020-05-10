/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {

    let newList = {};
    let cursor = newList;

    if (l1 == null && l2 == null) { return null; }
    if (l1 != null && l2 == null) { return l1; }
    if (l1 == null && l2 != null) { return l2; }

    while (l1 != null && l2 != null) {

        if (l1.val < l2.val) {
            cursor.val = l1.val;
            l1 = l1.next;
        } else {
            cursor.val = l2.val;
            l2 = l2.next;
        }

        cursor.next = {};
        cursor = cursor.next;
    }

    if (l1 == null) {
        while (l2 != null){
            cursor.val = l2.val;
            l2 = l2.next;

            if (l2 != null) {
                cursor.next = {};
                cursor = cursor.next;
            } else {
                cursor.next = null;
            }
        }
    }

    if (l2 == null) {
        while (l1 != null){
            cursor.val = l1.val;
            l1 = l1.next;

            if (l1 != null) {
                cursor.next = {};
                cursor = cursor.next;
            } else {
                cursor.next = null;
            }

        }

    }


    return newList;
};