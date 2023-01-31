// 2315. 统计星号

function countAsterisks(s: string): number {
	let count = 0;
  s.split("|").forEach((item, index) => {
		if (index % 2 === 0) { 
			item.split("").forEach(e => {
				if (e == "*") {
					count++;
				}
			});
		}
	});
	return count;
}
const s: string = "yo|uar|e**|b|e***au|tifu|l";
let ans: number = countAsterisks(s);
console.log("ans", ans);
