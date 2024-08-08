Function.prototype.myBind = function (context = window, ...args) {
	if (typeof this !== "function") {
		throw new Error("type error");
	}
	const self = this;
	return function fn(...newArgs) {
		if (this instanceof fn) {
			return new fn(...args, ...newArgs);
		}
		return self.apply(context, [...args, ...newArgs]);
	};
};
