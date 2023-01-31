// {
//   tag: 'DIV',
//   attrs:{
//   id:'app'
//   },
//   children: [
//     {
//       tag: 'SPAN',
//       children: [
//         { tag: 'A', children: [] }
//       ]
//     },
//     {
//       tag: 'SPAN',
//       children: [
//         { tag: 'A', children: [] },
//         { tag: 'A', children: [] }
//       ]
//     }
//   ]
// }
// 把上诉虚拟Dom转化成下方真实Dom
// <div id="app">
//   <span>
//     <a></a>
//   </span>
//   <span>
//     <a></a>
//     <a></a>
//   </span>
// </div>

const jsonData = {
	tag: "DIV",
	attrs: {
		id: "app",
	},
	children: [
		{
			tag: "SPAN",
			children: [{ tag: "A", children: [] }],
		},
		{
			tag: "SPAN",
			children: [
				{ tag: "A", children: [] },
				{ tag: "A", children: [] },
			],
		},
	],
};

function _render(vnode) {
	const { tag, attrs = {}, children } = vnode;
	//创建dom
	let el = document.createElement(tag);
	//添加attr
	for (const key in attrs) {
		el.setAttribute(key, attrs[key]);
	}
	//处理children
	if (Array.isArray(children) && children.length > 0) {
		children.forEach(child => el.appendChild(_render(child))); //子元素添加在父元素中
	}
	return el;
}

_render(jsonData);
