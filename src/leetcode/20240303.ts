class MyStack {
	List: any[];
	constructor() {
		this.List = [];
	}

	push(x: number): void {
		this.List.push(x);
	}

	pop(): number {
		let res = this.List[this.List.length - 1];
		this.List = this.List.slice(0, this.List.length - 1);
		return res;
	}

	top(): number {
		return this.List[this.List.length - 1];
	}

	empty(): boolean {
		return this.List.length === 0;
	}
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // 返回 2
myStack.pop(); // 返回 2
myStack.empty(); // 返回 False
console.log("myStack", myStack);
