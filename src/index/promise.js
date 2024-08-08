const PEDDING = "pedding";
const FULFILLED = "fulfilled";
const REJECT = "reject";
class myPromise {
	constructor(exector) {
		this.status = PEDDING;
		this.value = "";
		this.reason = "";
		const resolve = value => {
			if (this.status === PEDDING) {
				this.status = FULFILLED;
				this.value = this.value;
			}
		};
		const reject = reason => {
			if (this.status == PEDDING) {
				this.status = REJECT;
				this.reason = reason;
			}
		};
		try {
			exector(resolve, reject);
		} catch (error) {
			console.log("error", error);
		}
	}
	then(onFullFilled, onRejected) {
		if (this.status == FULFILLED) {
			onFullFilled(this.value);
		}
		if (this.status == REJECT) {
			onRejected(this.value);
		}
	}
	catch() {}
	static resolve() {}
	static reject() {}
	static all() {}
	static race() {}
}

const p = new myPromise((resolve, reject) => {
	if (Math.random() < 0.5) {
		resolve(-1);
	} else {
		reject(1);
	}
}).then(
	res => {
		console.log("res", res);
	},
	err => {
		console.log("err", err);
	}
);
