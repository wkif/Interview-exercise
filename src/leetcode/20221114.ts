/*
 * @Author: kif kif101001000@163.com 
 * @Date: 2022-11-14 16:29:51 
 * @Last Modified by:   kif kif101001000@163.com  
 * @Last Modified time: 2022-11-14 16:29:51 
 */
// 805. 数组的均值分割

function splitArraySameAverage(nums: number[]): boolean {
    if (nums.length === 1) {
        return false;
    }
    const n: number = nums.length, m: number = Math.floor(n / 2);
    let sum: number = 0;
    for (const num of nums) {
        sum += num;
    }
    let isPossible = false;
    for (let i = 1; i <= m; i++) {
        if (sum * i % n === 0) {
            isPossible = true;
            break;
        }
    }
    if (!isPossible) {
        return false;
    }
    const dp = new Array(m + 1).fill(0).map(() => new Set());
    dp[0].add(0);
    for (const num of nums) {
        for (let i = m; i >= 1; i--) {
            for (const x of dp[i - 1]) {
                let curr = x as number + num;
                if (curr * n === sum * i) {
                    return true;
                }
                dp[i].add(curr);
            }
        }
    }
    return false;
};