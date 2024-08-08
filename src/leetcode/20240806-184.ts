/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
	const n = k % nums.length;
	const list = nums.splice(0, nums.length - n);
	nums.push(...list);
}
const nums = [1, 2, 3, 4, 5, 6, 7],
	k = 3;
rotate(nums, k);
console.log("rotate(nums,k)", nums);
