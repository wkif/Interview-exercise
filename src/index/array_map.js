Array.prototype.myMap = function (callback, thisArg) {
	const O = Object(this);
	const length = O.length >>> 0;
	const res = [];
	for (let i = 0; i < length; i++) {
		if (thisArg) {
			res.push(callback(thisArg, O[i], i, this));
		} else {
			res.push(callback(O[i]));
		}
	}
	return res;
};

const list = new Array(1, 2, 3, 4, 5, 666);
const res = list.myMap(item => {
	return item * 2;
});
console.log("res", res);
