// 冒泡排序
function bubbleSort(arr: number[]): number[] {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// 绳子切割问题：给出N条绳子的长度，问按照一定长度 LG 切割这几条绳子得到至少 k 条肠胃 LG 的绳子，问长度L最长为多少，保留2位小数。
function cutRope(n: number, k: number): number {

    if (n <= 1) {
        return 0;
    }
    if (n == 2) {
        return 1;
    }
    if (n == 3) {
        return 2;
    }
    let max = 0;
    for (let i = 3; i <= n; i++) {
        let temp = Math.pow(k, Math.floor(i / k)) * Math.pow(k - 1, i % k);
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// 冒泡算法
    