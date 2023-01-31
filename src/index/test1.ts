/*
 * @Author: kif kif101001000@163.com 
 * @Date: 2023-01-09 01:23:59 
 * @Last Modified by: kif kif101001000@163.com 
 * @Last Modified time: 2023-01-09 01:53:08
 */
// 13. 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
// 示例 1:
// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]

// 示例 2:
// 输入: nums = [1], k = 1
// 输出: [1]
// 提示：
// • 1 <= nums.length <= 105
// • k 的取值范围是 [1, 数组中不相同的元素的个数]
// • 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的


const nums: Array<number> = [1], k: number = 1

const getTopKnum = function (list: Array<number>, k: number): Array<number> {
  let ans:Array<number> = []
  let recordSheet = new Map()
  list.forEach(item => {
    if (recordSheet.has(item)) {
      let value = recordSheet.get(item) + 1
      recordSheet.set(item, value)
    } else {
      recordSheet.set(item, 1)
    }
  })
  var arrayObj:Array<Array<number>> = Array.from(recordSheet);
  arrayObj.sort( 
    (a:Array<number>, b:Array<number>)=> 
    { 
      return b[1] - a[1] 
    }
    )
  for(let i=0;i<k;i++){
    ans.push(arrayObj[i][0])
  }
  return ans
}
console.log(getTopKnum(nums, k))