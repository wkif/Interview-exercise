function removeDuplicates(nums: number[]): number {
	const map = new Map();
	const n = nums.length;
	let right = n;
	for (let left = 0; left < right; left++) {
		if (!map.has(nums[left])) {
			map.set(nums[left], 1);
		} else {
			if (map.get(nums[left]) === 1) {
				map.set(nums[left], 2);
			} else {
				nums[left] = nums[right - 1];
				left--;
				right--;
			}
		}
	}
	nums.splice(right, n - right);
	nums.sort((a, b) => a - b);
	return right;
}
const nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
