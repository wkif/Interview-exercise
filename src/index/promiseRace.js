Promise.myRace = function (promiseList) {
	return new Promise((resolve, reject) => {
		promiseList.forEach(promise => {
			Promise.resolve(p).then(
				res => {
					resolve(res);
				},
				err => {
					reject(err);
				}
			);
		});
	});
};
