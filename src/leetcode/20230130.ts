//  Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function mergeInBetween(
	list1: ListNode | null,
	a: number,
	b: number,
	list2: ListNode | null
): ListNode | null {
	return list1;
}
const list1 = [0, 1, 2, 3, 4, 5];
const a = 3;
const b = 4;
const list2 = [1000000, 1000001, 1000002];

let res = mergeInBetween(list1, a, b, list2)

