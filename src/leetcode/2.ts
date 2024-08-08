/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {}
const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
let l1Node=null;
let l2Node = null;



// const res = addTwoNumbers(l1, l2);
// console.log("res", res);
