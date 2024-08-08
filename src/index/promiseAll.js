Promise.myAll = function (promiseList) {
	return new Promise((resolve, reject) => {
		const resList = [];
		let count = 0;
		for (let i = 0; i < promiseList.length; i++) {
			promiseList[i]
				.then(res => {
					resList.push(res);
					count++;
					if (count === promiseList.length - 1) {
						resolve(resList);
					}
				})
				.catch(err => {
					reject(err);
				});
		}
	});
};
