const myInstanceof = function (left, right) {
	let proto = Object.getPrototypeOf(left);
	while (true) {
		if (proto == null) {
			return;
		}
		if (proto == right.prototype) {
			return true;
		}
		proto = Object.getPrototypeOf(proto);
	}
};
