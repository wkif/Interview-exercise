function maxmiumScore(cards: number[], cnt: number): number {
	cards.sort((a, b) => b - a);
	let sum = cards[0];
	console.log("cards", cards);
	try {
		cards.forEach((item, index) => {
			if ((sum + item) % 2 == 0) {
				console.log("item", item);
				sum += item;
				cnt--;
			}
		});
		if (cnt <= 0) {
			throw Error();
		}
	} catch (error) {}
	return sum;
}

const cards = [1, 2, 8, 9],
	cnt = 3;
console.log(maxmiumScore(cards, cnt));
