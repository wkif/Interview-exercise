function removeElement(nums: number[], val: number): number {
	// const tempList = [...nums];
	// nums.length = 0;
	// tempList.forEach((item, index) => {
	// 	if (item !== val) {
	// 		nums.push(item);
	// 	}
	// });
	// return nums.length;
	const n = nums.length;
	let left = 0;
	for (let right = 0; right < n; right++) {
		if (nums[right] !== val) {
			nums[left] = nums[right];
			left++;
		}
	}
    return left;
}
const nums = [3, 2, 2, 3],
	val = 3;
console.log(removeElement(nums, val));
