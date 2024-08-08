function majorityElement(nums: number[]): number {
	const temp = Math.floor(nums.length / 2);
	const map = new Map();
	let res = nums[0];
	try {
		nums.forEach(item => {
			if (!map.has(item)) {
				map.set(item, 0);
			}
			let val = map.get(item);
			val++;
			map.set(item, val);
			res = item;
			// console.log("val", val, item);
			if (val > temp) {
				throw new Error();
			}
		});
	} catch (error) {}
	return res;
}
const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
