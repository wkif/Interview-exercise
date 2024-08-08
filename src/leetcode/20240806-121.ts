function maxProfit(prices: number[]): number {
	console.log("prices", prices);
	const minPrice = Math.min(...prices);
	const minIndex = prices.findIndex(item => item == minPrice);
	if (minIndex === prices.length - 1) {
		prices.splice(minIndex, 1);
		maxProfit(prices);
        return 0
	} else {
		const list = prices.slice(minIndex, prices.length);
		const maxPrice = Math.max(...list);
		console.log("minPrice", minPrice, minIndex, maxPrice);
		return maxPrice - minPrice;
	}
}
const prices = [2, 4, 1];
console.log("maxProfit(prices)", maxProfit(prices));
