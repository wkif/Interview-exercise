// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。


const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
                break
            }
        }
    }
}


const twoSumMap = function (nums, target) {
    const map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        // 一层遍历，用 target 减去每一项，在 map 的 key 中寻找
        if (map.has(target - nums[i])) {
            // 存在则返回结果
            return [map.get(target - nums[i]), i];
        }
        // 不存在，则设置 map key 和 val
        map.set(nums[i], i);
    }
    return [];
}

let nums = [2, 7, 11, 15]
let target = 9

console.log('twoSum(nums,target)', twoSumMap(nums, target))