function countPaths(n: number, roads: number[][]): number {
    const mod = 1e9 + 7;
    const e: number[][][] = new Array(n).fill(0).map(() => new Array());
    for (const [x, y, t] of roads) {
        e[x].push([y, t]);
        e[y].push([x, t]);
    }

    const dis: number[] = [0].concat(Array(n - 1).fill(Infinity));
    const ways: number[] = [1].concat(Array(n - 1).fill(0));
    const q = new MinPriorityQueue();
    q.enqueue([0, 0], 0);

    while (!q.isEmpty()) {
        let [t, u] = q.front().element;
        q.dequeue();
        if (t > dis[u]) continue;
        for (const [v, w] of e[u]) {
            if (t + w < dis[v]) {
                dis[v] = t + w;
                ways[v] = ways[u];
                q.enqueue([t + w, v], t + w);
            } else if (t + w === dis[v]) {
                ways[v] = (ways[u] + ways[v]) % mod;
            }
        }
    }
    return ways[n - 1];
};

const n = 7,
	roads = [
		[0, 6, 7],
		[0, 1, 2],
		[1, 2, 3],
		[1, 3, 3],
		[6, 3, 3],
		[3, 5, 1],
		[6, 5, 1],
		[2, 5, 1],
		[0, 4, 5],
		[4, 6, 2],
	];
const res = countPaths(n, roads);
console.log("res", res);
