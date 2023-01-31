// 实现一个Promise.all

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
	resolve(100);
});

Promise.all([promise1, promise2, promise3]).then(values => {
	console.log(values);
});
Promise.AllbyKif = function (argsList) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(argsList)) {
			reject(new Error("Invalid arguments"));
		} else {
			let resolveCounter = 0;
			let resolveList = [];
			for (let i = 0; i < argsList.length; i++) {
				Promise.resolve(argsList[i]).then(
					value => {
						resolveCounter++;
						resolveList[i] = value;
						if (resolveCounter === resolveList.length) {
							resolve(resolveList);
						}
					},
					reason => {
						reject(reason);
					}
				);
			}
		}
	});
};
// console.log(JSON.stringify(Promise));
Promise.AllbyKif([promise1, promise2, promise3]).then(values => {
	console.log(values);
});
