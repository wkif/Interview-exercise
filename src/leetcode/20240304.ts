class MyQueue {
	List: any[];
	constructor() {
		this.List = [];
	}

	push(x: number): void {
		this.List.push(x);
	}

	pop(): number {
		let res = 0;
		if (this.List.length > 0) {
			res = this.List[0];
			this.List=this.List.slice(1);
		}
		return res;
	}

	peek(): number {
		let res = 0;
		if (this.List.length > 0) {
			res = this.List[0];
		}
		return res;
	}

	empty(): boolean {
		return this.List.length == 0;
	}
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1

myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false
console.log("myQueue", myQueue);
