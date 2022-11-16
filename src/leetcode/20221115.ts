/*
 * @Author: kif kif101001000@163.com 
 * @Date: 2022-11-15 10:21:55 
 * @Last Modified by: kif kif101001000@163.com 
 * @Last Modified time: 2022-11-15 12:24:50
 */

// 1710. 卡车上的最大单元数

// 输入：boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
// 输出：8
// 解释：箱子的情况如下：
// - 1 个第一类的箱子，里面含 3 个单元。
// - 2 个第二类的箱子，每个里面含 2 个单元。
// - 3 个第三类的箱子，每个里面含 1 个单元。
// 可以选择第一类和第二类的所有箱子，以及第三类的一个箱子。
// 单元总数 = (1 * 3) + (2 * 2) + (1 * 1) = 8

export function maximumUnits(boxTypes: number[][], truckSize: number): number {
    let resNum: number = 0
    let truckNum: number = 0
    for (let i = 0; i < boxTypes.length - 1; i++) {
        for (let j = 0; j < boxTypes.length - 1 - i; j++) {
            if (boxTypes[j][1] < boxTypes[j + 1][1]) {
                [boxTypes[j], boxTypes[j + 1]] = [boxTypes[j + 1], boxTypes[j]]
            }
        }
    }
    boxTypes.forEach(item => {
        while (truckNum < truckSize && item[0] > 0) {
            resNum += item[1]
            item[0]--
            truckNum++
        }
    })
    return resNum
};
