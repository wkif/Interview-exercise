const getArea = function (w, h) {
	return w * h;
};
const getAreaten = function (h) {
	return getArea(10, h);
};

console.log("getAreaten(12)", getAreaten(12));
