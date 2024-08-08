Array.prototype.myFilter = function (callback, thisArg) {
	if (this === undefined) {
		throw new Error("this is null or undefined");
	}
	if (typeof callback !== "function") {
		throw new Error("is not a function");
	}
	const res = [];
	const O = Object(this);
	const length = O.length >>> 0;
	console.log("thisArg", thisArg);
	console.log("length", length);
	console.log("O", O);
	for (let i = 0; i < length; i++) {
		if (i in O) {
			if (thisArg) {
				if (callback.apply(thisArg, O[i], i, O)) {
					res.push(O[i]);
				}
			} else {
				if (callback(O[i])) {
					res.push(O[i]);
				}
			}
		}
	}
	return res;
};

const list = new Array(1, 2, 3, 4, 5, 6, 7);
const res = list.myFilter(item => {
	if (item > 5) {
		return true;
	} else {
		return false;
	}
});
console.log("res", res);
