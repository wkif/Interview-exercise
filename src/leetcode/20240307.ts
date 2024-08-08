function divisibilityArray(word: string, m: number): number[] {
	// const res: number[] = new Array(word.length);
	// const n = BigInt(m)
	// for (let i = 0; i < word.length; i++) {
	// 	const num = BigInt(word.slice(0, i + 1));
	// 	if (num % n == 0n) {
	// 		res[i] = 1;
	// 	} else {
	// 		res[i] = 0;
	// 	}
	// 	// console.log("num", num, res[i]);
	// }
	// return res;
	const res:number[] = [];
	let cur = 0;
	for (const c of word) {
		cur = (cur * 10 + (c.charCodeAt(0) - "0".charCodeAt(0))) % m;
		res.push(cur === 0 ? 1 : 0);
	}
	return res;
}

const word = "86217457695827338571",
	m = 8;

const res = divisibilityArray(word, m);
console.log("res", res);
