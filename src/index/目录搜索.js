const treeData = [
	{
		name: "dir",
		id: 0,
		children: [
			{
				name: "subdir1",
				id: 1,
				children: [
					{
						name: "file1.ext",
						id: 3,
					},
					{
						name: "subsubdir1",
						id: 4,
					},
				],
			},
			{
				name: "subdir2",
				id: 2,
				children: [
					{
						name: "subsubdir2",
						id: 5,
						children: [
							{
								name: "file2.ext",
								id: 5,
							},
						],
					},
				],
			},
		],
	},
];

let input: string = "subsubdir";

function getAns(treeData, name) {
	let ans = deepSearch(treeData, name);
	function deepSearch(treeData, name) {
		for (let i in treeData) {
			// console.log("treeData[i]", treeData[i]);
			if (treeData[i].name === name) {
				return [treeData[i]];
			}
			if (treeData[i].children) {
				let node = deepSearch(treeData[i].children, name);
				if (node !== undefined) {
					return node.concat(treeData[i]);
				}
			}
		}
	}
	let res = "";
	ans.reverse().forEach(element => {
		res += "/" + element.name;
	});
	return res;
}

console.log(getAns(treeData, input));
