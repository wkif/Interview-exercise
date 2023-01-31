var data2 = [
	{
		id: 1,
		label: "一级 1",
		children: [
			{
				id: 4,
				label: "二级 1-1",
				children: [
					{
						id: 9,
						label: "三级 1-1-1",
					},
					{
						id: 10,
						label: "三级 1-1-2",
					},
				],
			},
		],
	},
	{
		id: 2,
		label: "一级 2",
		children: [
			{
				id: 5,
				label: "二级 2-1",
			},
			{
				id: 6,
				label: "二级 2-2",
			},
		],
	},
	{
		id: 3,
		label: "一级 3",
		children: [
			{
				id: 7,
				label: "二级 3-1",
			},
			{
				id: 8,
				label: "二级 3-2",
			},
		],
	},
];

function getParentId(list, id) {
	for (let i in list) {
		if (list[i].id == id) {
			return [list[i]];
		}
		if (list[i].children) {
			let node = getParentId(list[i].children, id);
			if (node !== undefined) {
				return node.concat(list[i]);
			}
		}
	}
}
console.log(getParentId(data2, 10)); //打印出来就是想要的数据
