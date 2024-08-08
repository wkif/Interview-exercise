const throtle = function (fn, time) {
	let timer = null;
	return function (...args) {
		if (timer) {
			return;
		}
		timer = setTimeout(function () {
			fn.apply(this, args);
		}, time);
	};
};
