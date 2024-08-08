class Scheduler {
	constructor() {
		this.list = [];
		this.maxCount = 3;
		this.count = 0;
	}
	add(promiser) {
		this.list.push(promiser);
	}
	taskStart() {
		for (let i = 0; i < this.maxCount; i++) {
			this.request();
		}
	}
	request() {
		if (!this.list || this.list === 0 || this.count >= this.maxCount) {
			return;
		}
		this.count++;
		this.list
			.shift()()
			.then(() => {
				this.count--;
				this.request();
			});
	}
}

const timeout = time =>
	new Promise(resolve => {
		setTimeout(resolve, time);
	});

const scheduler = new Scheduler();

const addTask = (time, order) => {
	scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

scheduler.taskStart();
