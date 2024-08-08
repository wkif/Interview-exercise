const debounce = function (fn, time) {
	let timer = null;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.apply(this, arguments);
		}, time);
	};
};
