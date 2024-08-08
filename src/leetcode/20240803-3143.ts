function maxPointsInsideSquare(points: number[][], s: string): number {
	const map = new Map();
	const list = new Array();
	points.forEach((point, index) => {
		const max = Math.max(Math.abs(point[0]), Math.abs(point[1]));
		if (!map.has(max)) {
			const arr: string[] = new Array();
			map.set(max, arr);
			list.push(max);
		}
		const arr: string[] = map.get(max);
		arr.push(s[index]);
	});
	list.sort((a, b) => a - b);
	// console.log("map", map, list);
	let count = 0;
	let temp = new Array();
	try {
		list.forEach(key => {
			const arr = map.get(key);
			if (Array.isArray(arr)) {
				arr.forEach(item => {
					if (!temp.includes(item)) {
						temp.push(item);
					} else {
						throw Error();
					}
				});
			}
			count += arr.length;
		});
	} catch (error) {}
	return count;
}
const points = [
		[2, 2],
		[-1, -2],
		[-4, 4],
		[-3, 1],
		[3, -3],
	],
	s = "abdca";
console.log(maxPointsInsideSquare(points, s));
