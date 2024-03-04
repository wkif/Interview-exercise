function reachableNodes(
	n: number,
	edges: number[][],
	restricted: number[]
): number {
	const countMap = new Array(n).fill(0);
	function getFronEdgs(num, edges, countMap, restricted) {
		edges.forEach((element: number[]) => {
			const index = element.indexOf(num);
			const other = element[index == 0 ? 1 : 0];
			if (
				index !== -1 &&
				!restricted.includes(other) &&
				countMap[other] == 0
			) {
				countMap[other]++;
				getFronEdgs(other, edges, countMap, restricted);
			}
		});
	}
	countMap[0] = 1;
	getFronEdgs(0, edges, countMap, restricted);
	return countMap.filter(a => a > 0).length;
}

const n = 7;
const edges = [
	[0, 1],
	[1, 2],
	[3, 1],
	[4, 0],
	[0, 5],
	[5, 6],
];
const restricted = [4, 5];
console.log(
	"reachableNodes(n,edges,restricted)",
	reachableNodes(n, edges, restricted)
);
