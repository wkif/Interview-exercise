/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	// nums1 = nums1.slice(m,-1).concat(nums2).sort((a,b)=>a-b)
	nums1 = nums1.slice(0, m).concat(nums2).sort((a,b)=>a-b);
	console.log("nums1", nums1);
}
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums2, n);
